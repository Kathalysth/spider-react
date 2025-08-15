import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

const createConfig = (packageName, external = []) => [
  // Main build
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', ...external],
    output: [
      {
        file: `dist/${packageName}.cjs.js`,
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      },
      {
        file: `dist/${packageName}.esm.js`,
        format: 'esm',
        sourcemap: true
      },
      {
        file: `dist/${packageName}.umd.js`,
        format: 'umd',
        name: packageName.charAt(0).toUpperCase() + packageName.slice(1),
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true
      }),
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        inlineSources: true
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true
        }
      })
    ]
  },
  // Type definitions
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', ...external],
    output: {
      file: `dist/${packageName}.d.ts`,
      format: 'esm'
    },
    plugins: [dts()]
  }
];

export default createConfig;