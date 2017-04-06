const {root}            = require('./helpers');
const path              = require('path');
const {AotPlugin}       = require('@ngtools/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin                           = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin                     = require('optimize-css-assets-webpack-plugin');
const cssnano                                     = require('cssnano');
const ScriptExtPlugin                             = require('script-ext-html-webpack-plugin');
const {NoEmitOnErrorsPlugin, LoaderOptionsPlugin} = require('webpack');
const {CommonsChunkPlugin}                        = require('webpack').optimize;
const nodeModules                                 = path.join(process.cwd(), 'node_modules');
const CopyWebpackPlugin                           = require('copy-webpack-plugin');
const webpack                                     = require('webpack');
const autoprefixer                                = require('autoprefixer');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = {
  entry: {
    "styles": root("./src/styles.scss"),
    "client": root('./src/main.browser.ts'),
    //"fonts": "https://fonts.googleapis.com/icon?family=Material+Icons"
  },
  output: {
    filename: '[name].js'
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: root('./src/index.html'),
      output: root('dist'),
      inject: 'body'
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    }),
    new ExtractTextPlugin({
      "filename": "[name].css",
      "disable": true
    }),
    new CopyWebpackPlugin([
      {from: root("./src/assets"), to: root('./dist/src/assets')}
    ]),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
        safe: true,
      },
      canPrint: false,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname + './src',
        output: { path :  "./dist" },
        postcss: [
          autoprefixer
        ]
      }
    })
  ],
  //postcss: function () { //NEW
  //  return [autoprefixer({
  //    browsers: ['last 2 versions']
  //  })];
  //}
};
