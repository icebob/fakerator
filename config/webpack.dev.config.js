var path = require('path');
var webpack = require('webpack');

var sourceDir = path.resolve("lib");

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

  resolve: {
    packageAlias: 'browser',   
    alias: {
      'lib': sourceDir,
      'vendor': path.resolve("vendor"),
      'locales': path.join(sourceDir, "locales")
    }
  },  

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
