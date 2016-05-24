var webpack = require("webpack");
var version = require("../package.json").version;

var merge = require("webpack-merge");
var wpBaseConfig = require("./webpack.base.config");

module.exports = [
	wpBaseConfig,
	merge(wpBaseConfig, {
		output: {
			path: "./dist",
			filename: "fakerator.min.js",
			library: "Fakerator",
			libraryTarget: "umd"
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		]       
	})
];
