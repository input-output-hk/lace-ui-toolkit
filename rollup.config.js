import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import execute from 'rollup-plugin-shell';

import packageJson from './package.json';

const YALC_PUBLISH = process.env.YALC_PUBLISH === 'true';

export default () => ({
  input: 'src/index.ts',
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      composite: false,
      exclude: ['**/*.stories.tsx'],
    }),
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    peerDepsExternal(),
    commonjs(),
    image(),
    svgr({ icon: true }),
    YALC_PUBLISH &&
      execute({
        commands: ['yalc push --no-pure'],
        hook: 'closeBundle',
        parallel: false,
      }),
  ],
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: false,
    },
  ],
  external: [/node_modules/],
});
