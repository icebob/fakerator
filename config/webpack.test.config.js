var webpack = require("webpack");
var path = require("path");
var version = require("../package.json").version;

var merge = require("webpack-merge");
var wpBaseConfig = require("./webpack.base.config");

module.exports = merge(wpBaseConfig, {
	devtool: '#inline-source-map',
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				include: path.resolve('lib'),
				loader: 'babel-istanbul',
				query: {
					cacheDirectory: true
				}
			}			
		]
	}

});

delete module.exports.entry;
delete module.exports.output;
