// import babel from '@rollup/plugin-babel';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import ts from 'rollup-plugin-ts';
// import { terser } from 'rollup-plugin-terser';
// import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

const bundle = (config) => ({
  ...config,
  input: ['src/index.ts', 'src/breakpoint/index.ts'],
  external: (id) => !/^[./]/.test(id)
});

export default [
  bundle({
    plugins: [esbuild()],
    output: {
      format: 'cjs',
      dir: 'dist/cjs',
      exports: 'auto',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true
    }
  }),
  bundle({
    plugins: [esbuild()],
    output: {
      format: 'es',
      dir: 'dist/esm',
      exports: 'auto',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true
    }
  }),
  {
    plugins: [dts()],
    input: 'src/index.ts',
    output: {
      format: 'es',
      file: 'dist/types/index.d.ts'
    }
  },
  {
    plugins: [dts()],
    input: 'src/breakpoint/index.ts',
    output: {
      format: 'es',
      file: 'dist/types/breakpoint.d.ts'
    }
  }
];
