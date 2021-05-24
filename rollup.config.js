import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";

export default {
  input: 'src/index.js',
  plugins: [
    eslint({
      exclude: [
        'node_modules/**',
        'dist/**'
      ]
    }),
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
