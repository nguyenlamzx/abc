const path = require('path');
const appRoot = require('app-root-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const packageJson = require('../package.json');
const vendorDependencies = Object.keys(packageJson['dependencies']);

const threadLoader = {
  loader: 'thread-loader',
  options: {
    // there should be 1 cpu for the fork-ts-checker-webpack-plugin
    workers: require('os').cpus().length - 1,
  },
};

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  },
};

module.exports = {
  cache: true,
  entry: {
    main: appRoot.resolve('/src/index.ts'),
    // style: appRoot.resolve('/src/styles/base.scss'),
    vendor: vendorDependencies,
  },
  resolve: {},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: appRoot + '/configs/cache-loader/',
            },
          },
          threadLoader,
          babelLoader,
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          // {
          //   loader: 'style-loader', // inject CSS to page
          //   // loader: 'style-loader/url', // inject CSS file to page
          //   options: {
          //     hmr: false,
          //     sourceMap: true,
          //     convertToAbsoluteUrls: true,
          //     insertInto: () => document.getElementsByTagName('head')[0],
          //   },
          // },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function() {
                // postcss plugins, can be exported to postcss.config.js
                return [require('autoprefixer')];
              },
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      tslint: true,
      watch: ['./src'], // optional but improves performance (less stat calls)
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
};
