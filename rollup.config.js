import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import pkg from './package.json'

export default [{
  entry: 'src/index.js',
  dest: pkg.browser,
  format: 'umd',
  moduleName: 'mokkr',
  plugins: [
    resolve(), // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    buble({ // transpile ES2015+ to ES5
      exclude: ['node_modules/**']
    })
  ]
}, {
  entry: 'src/index.js',
  external: ['ms'],
  targets: [
    { dest: pkg.main, format: 'cjs' },
    { dest: pkg.module, format: 'es' }
  ],
  plugins: [
    buble({
      exclude: ['node_modules/**']
    })
  ]
}]
