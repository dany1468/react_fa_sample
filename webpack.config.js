var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    react_fa: './index_react_fa.js',
    font_awesome_webpack: './index_font_awesome_webpack.js',
    font_awesome: './index_font_awesome.js'
  },
  output: {
    path: 'assets',
    filename: '[name]_bundle.js'
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
        test: /\.css(\?.+)?$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]_bundle.css')
  ]
}
