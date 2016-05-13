var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    fakerator: path.resolve('demo', 'index.js')
  },

  target: 'node',
  
  output: {
    path: path.resolve('demo'),
    filename: '[name].js'
  },

  plugins: [
  ],

  module: {
    loaders: [
      {
        "test": /\.js?$/,
        "exclude": /node_modules/,
        "loader": "babel"
      }
    ]
  }

};
