var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    app: './scripts/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['scripts', 'node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js$/,
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true,
          plugins: ['transform-strict-mode', 'transform-object-rest-spread', 'es6-promise']
        },
      }
    ]
  }
};
