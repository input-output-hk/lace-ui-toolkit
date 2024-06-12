const path = require('path');

const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react',
  webpackFinal: config => {
    config.plugins = [new VanillaExtractPlugin(), ...config.plugins];

    if (process.env.NODE_ENV === 'development') {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'async',
          minSize: 20_000,
          minRemainingSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50_000,
          cacheGroups: {
            defaultVendors: {
              test: `[\\/]node_modules[\\/](?!.*vanilla-extract)`,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            exportType: 'named',
          },
        },
      ],
    });

    config.resolve.extensions.push('.svg');
    config.resolve.alias = {
      ...config.resolve.alias,
      // '@icons/$': resolve.resolve(__dirname, '../src/icons/'),
      '@icons': path.resolve(__dirname, '../src/icons/'),
    };

    return config;
  },
  core: {
    builder: 'webpack5',
    options: {
      lazyCompilation: true,
      fsCache: true,
    },
  },
  features: {
    interactionsDebugger: true,
  },
};
