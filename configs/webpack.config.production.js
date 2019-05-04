const webpack = require('webpack')
const webpackFailPlugin = require('webpack-fail-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpackConfig = require('./webpack.config.base.js')

module.exports = function () {
  const myProdConfig = webpackConfig
  myProdConfig.output.filename = '[name].[hash].js'

  myProdConfig.plugins = myProdConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.[hash].js' }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: true
        }
      }
    }),
    webpackFailPlugin
  )

  return myProdConfig
}
