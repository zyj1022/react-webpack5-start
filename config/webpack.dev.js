const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.base');
const { dev, proxy, lessModifyVars } = require('./config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
    // webpack 输出包中生成路径信息 会给捆绑数千个模块的项目带来垃圾收集的压力 这里设为false
    pathinfo: false,
  },
  // 缓存生成的webpack模块和块，以提高构建速度
  cache: {
    type: 'memory',
    // type:'filesystem'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                paths: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules/antd')],
                modifyVars: lessModifyVars,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    usedExports: true,
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../dll'),
          to: path.resolve(__dirname, '../dist'),
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: dev.port,
    proxy: {
      '/api': {
        target: proxy.target,
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
