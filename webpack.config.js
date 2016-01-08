var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: 'assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(css)(\?.+)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-url')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}
