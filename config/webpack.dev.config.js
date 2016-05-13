var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    fakerator: path.resolve('lib', 'index.js')
  },

  //target: 'node',
  
  output: {
    path: path.resolve('demo'),
    filename: '[name].js',
    library: "Fakerator",
    libraryTarget: "umd"    
  },

  plugins: [
  ],

  /*resolve: {
    packageAlias: 'browser'
  }, */ 

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
