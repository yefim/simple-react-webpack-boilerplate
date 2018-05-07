const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'build')
  },
  resolve: {
    modules: ['scripts', 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebPackPlugin({template: 'src/index.html'}),
    new webpack.HashedModuleIdsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true}
          }
        ]
      },
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        options: {
          presets: [
            ['env', {modules: false, targets: {browsers: ['last 2 versions']}}],
            'react'
          ],
          cacheDirectory: true,
          plugins: [
            'transform-strict-mode',
            'transform-object-rest-spread',
            'transform-class-properties'
          ]
        },
      }
    ]
  }
};
