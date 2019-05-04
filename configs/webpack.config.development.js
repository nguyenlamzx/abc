const webpack = require('webpack');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const webpackConfig = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function () {
  const myDevConfig = webpackConfig
  myDevConfig.devtool = 'inline-source-map'

  myDevConfig.optimization = Object.assign({}, myDevConfig.optimization, {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    }
  });

  myDevConfig.plugins = myDevConfig.plugins.concat(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new ForkTsCheckerNotifierWebpackPlugin({ title: 'Webpack build', excludeWarnings: true }),
  )

  myDevConfig.devServer = {
    historyApiFallback: true,
    stats: 'errors-only',
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true
    }
  }
  return myDevConfig
}
