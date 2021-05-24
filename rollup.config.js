import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  plugins: [
    terser()
  ],
  output: [
    {
      name: 'vueMediaQueries',
      file: 'dist/vue-media-query-plugin.js',
      format: 'umd',
      exports: 'named',

    },
    {
      file: 'dist/vue-media-query-plugin.esm.js',
      format: 'es',
    }
  ]
}
