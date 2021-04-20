const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    // modules: [path.resolve(__dirname, '../node_modules')],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    mainFields: ['main'],
    enforceExtension: false,
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss', '.less'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              include: path.resolve(__dirname, '../src'),
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new AntdDayjsWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('../dll/vendor-manifest.json'),
      context: path.resolve(__dirname, '..'),
    }),
    new HtmlWebpackPlugin({
      title: 'react-app',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new WebpackBar({
      name: 'Webpack',
      color: 'orange',
      reporters: ['fancy'],
    }),
  ],
};
