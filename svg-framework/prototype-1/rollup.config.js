import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

export default {
  entry: 'src/main.js',
  format: 'es',
  plugins: [
    sass({
      insert: true
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  dest: 'index.js'
}
