var webpack = require("webpack");
var path = require("path");
var del = require("del");

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
	}),
	merge(wpBaseConfig, {
		entry: path.resolve('lib', 'locales', 'locale-build.js'),
		output: {
			path: "./dist/locales",
			filename: "hu-HU.js",
			library: "Fakerator",
			libraryTarget: "umd"
		}
	})
];

del.sync(["./dist"]);
