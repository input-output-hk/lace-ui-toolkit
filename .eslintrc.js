const path = require('node:path');

module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc.json',
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: path.resolve(__dirname),
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import',
    'prefer-arrow-functions',
  ],
  settings: {
    // Fixes eslint not being able to detect react version
    react: { pragma: 'React', fragment: 'Fragment', version: 'detect' },
  },
  rules: {
    'max-params': ['error', 3],
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: '@storybook/**',
            group: 'external',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['*design-system/*/*'],
            message: 'usage of design system private modules not allowed.',
          },
          {
            group: ['*design-tokens/*'],
            message: 'usage of design tokens private modules not allowed.',
          },
          {
            group: ['*types/*'],
            message: 'usage of types private modules not allowed.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.stories.tsx'],
      rules: {
        'react/no-multi-comp': ['off'],
      },
    },
  ],
};
