var path = require('path');

module.exports = {
  context: __dirname,
  entry: './scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  resolve: {
    modules: ['scripts', 'node_modules']
  },
  module: {
    rules: [
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
