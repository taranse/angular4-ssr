const {root} = require('./helpers');

const {AotPlugin}       = require('@ngtools/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin       = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano                 = require('cssnano');
const ScriptExtPlugin         = require('script-ext-html-webpack-plugin');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = {
  entry: {
    "client": root('./src/main.browser.ts'),
    "styles": root("./src/styles.scss")
  },
  output: {
    filename: '[name].js'
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: root('./src/index.html'),
      output: root('dist'),
      inject: 'head'
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    }),
    new ExtractTextPlugin({
      "filename": "[name].css",
      "disable": true
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
        safe: true,
      },
      canPrint: false,
    })
  ]
};
