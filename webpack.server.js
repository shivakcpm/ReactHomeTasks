const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader', 'css-loader']
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    {
        test: /\.jpe?g|png|PNG$/,
        exclude: /node_modules/,
        loader: ['file-loader']
    },
    ]
  }
};