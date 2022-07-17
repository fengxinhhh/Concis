import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: ['./src/extension.ts'],
  output: [
    {
      file: 'dist/extension.js',
      format: 'cjs',
      name: 'cjs.js',
    },
  ],
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    clear({
      targets: ['dist'],
    }),
    resolve(),
    commonjs(),
    terser(),
    uglify(),
  ],
  external: ['react', 'react-dom'],
};
