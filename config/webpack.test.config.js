var webpack = require("webpack");
var version = require("../package.json").version;

var merge = require("webpack-merge");
var wpBaseConfig = require("./webpack.base.config");

module.exports = merge(wpBaseConfig, {
	entry: null,
	output: null,
	devtool: '#inline-source-map',
	preLoaders: [
		{
			test: /\.js$/,
			loader: 'isparta',
			include: './lib',
			exclude: /node_modules/
		}		
	]
});

delete module.exports.entry;
delete module.exports.output;
