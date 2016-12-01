import rollup from 'rollup';
import closure from 'rollup-plugin-closure-compiler-js';

export default {
  entry: 'index.js',
  dest: 'dist/build.js',
  format: 'iife',
  plugins: [
    closure({
      languageIn: 'ECMASCRIPT6',
      languageOut: 'ECMASCRIPT5',
      compilationLevel: 'ADVANCED',
      warningLevel: 'DEFAULT'
    })
  ]
}