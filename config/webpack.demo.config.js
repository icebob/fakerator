var webpack = require("webpack");
var version = require("../package.json").version;

var merge = require("webpack-merge");
var wpBaseConfig = require("./webpack.base.config");

module.exports = [
	merge(wpBaseConfig, {
		devtool: '#inline-source-map',
		output: {
			path: "./demo",
			filename: "fakerator.js",
			library: "Fakerator",
			libraryTarget: "umd"
		}
	})
];
