// @ts-check

import { terser } from 'rollup-plugin-terser';
import typescript2 from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };

const banner = `/*!
 * KeyWee v${pkg.version}
 * (c) zignis (https://github.com/zignis/keywee)
 * Released under the MIT License.
 */
`;

/**
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
function createOutputOptions(options) {
  return {
    banner,
    exports: 'named',
    name: 'keywee',
    sourcemap: true,
    ...options,
  };
}

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/index.ts',
  output: [
    createOutputOptions({
      file: './dist/index.js',
      format: 'commonjs',
    }),
    createOutputOptions({
      file: './dist/index.cjs',
      format: 'commonjs',
    }),
    createOutputOptions({
      file: './dist/index.mjs',
      format: 'esm',
    }),
    createOutputOptions({
      file: './dist/index.esm.js',
      format: 'esm',
    }),
    createOutputOptions({
      file: './dist/index.umd.js',
      format: 'umd',
    }),
    createOutputOptions({
      file: './dist/index.umd.min.js',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
  plugins: [
    typescript2({
      clean: true,
      tsconfig: './tsconfig.bundle.json',
      useTsconfigDeclarationDir: true,
    }),
  ],
};

export default options;
