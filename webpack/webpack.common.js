const {root} = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('dist')
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: '@ngtools/webpack'},
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
        options: {output: '[path][name].[ext]'}
      },
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader", options: {output: '[path][name].[ext]'}},
      {test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader", options: {output: '[path][name].[ext]'}},
      {
        exclude: [
          root("./src/styles.scss")
        ],
        test: /\.scss$|\.sass$/,
        loaders: [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "sass-loader"
        ]
      },
      {
        "include": [
          root("./src/styles.scss")
        ],
        "test": /\.scss$|\.sass$/,
        "loaders": ExtractTextPlugin.extract({
          "use": ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
          "fallback": "style-loader",
          "publicPath": ""
        })
      }
    ]
  },
  plugins: []
};
