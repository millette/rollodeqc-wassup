'use strict'

const webpack = require('webpack')

const loaders = [
  { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
  { test: /\/js\/(main|utils)\.js$/, loader: 'babel?presets[]=es2015' }
]

const plugins = [ new webpack.ProvidePlugin({
  'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
  'window.fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
}) ]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }))
}

const modules = [
  'generator-nm-standard',
  'rollodeqc-gh-search-users',
  'rollodeqc-gh-utils',
  'rollodeqc-gh-user',
  'rollodeqc-gh-user-events',
  'rollodeqc-gh-repos',
  'rollodeqc-gh-bookworm',
  'rollodeqc-gh-users',
  'rollodeqc-gh-members',
  'rollodeqc-gh-search-users-all',
  'rollodeqc-qc-locator',
  'aurtier',
  'star-where',
  'librarian-api',
  'package-managers'
]

const modulesMore = [
  'rollodeqc-dev-profile',
  'rollodeqc-wassup',
  'webqcdevs',
  'meridas',
  'boy-lost-webpack'
]

module.exports = {
  entry: [ './entry.js', 'file?name=index.html!jade-html!./index.jade' ],
  output: { path: __dirname, filename: 'bundle.js' },
  devServer: { inline: true, host: '0.0.0.0', port: 1234 },
  module: { loaders: loaders },
  plugins: plugins,
  jadeLoader: { locals: { modules: modules, modulesMore: modulesMore } },
  postcss: [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-url')(),
    require('postcss-cssnext')(),
    require('postcss-responsive-type')(),
    require('lost'),
    require('postcss-browser-reporter')(),
    require('postcss-reporter')()
  ]
}
