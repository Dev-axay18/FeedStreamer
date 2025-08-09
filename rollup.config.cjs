const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const  terser  = require('@rollup/plugin-terser');
const dts = require('rollup-plugin-dts').default;
const packageJson = require('./package.json');

module.exports = [
  // ---- 1. JavaScript Build (CJS + ESM) ----
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main, // dist/index.cjs.js
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module, // dist/index.esm.js
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.ts', '**/*.test.tsx', 'node_modules'],
      }),
      postcss({
        extract: true, // creates dist/styles.css
        minimize: true,
        sourceMap: true,
      }),
      terser(),
    ],
    external: ['react', 'react-dom', 'framer-motion', 'clsx'], // keep peer deps external
  },

  // ---- 2. Type Declarations (.d.ts) ----
  {
    input: 'src/index.ts', // ✅ Use source, not dist, to avoid circular imports
    output: [{ file: packageJson.types, format: 'es' }], // dist/index.d.ts
    plugins: [dts()],
    external: [/\.css$/],
    watch: {
      exclude: ['dist/**'], // ✅ Prevents "Cannot import the generated bundle" error
    },
  },
];
