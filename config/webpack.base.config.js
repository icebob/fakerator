var path = require("path");
var webpack = require("webpack");
var sourceDir = path.resolve("lib");

var version = require("../package.json").version;
var banner = "/**\n" + " * fakerator v" + version + "\n" + " * https://github.com/icebob/fakerator\n" + " * Released under the MIT License.\n" + " */\n";

module.exports = {
	entry: path.resolve('lib', 'index.js'),
	output: {
		path: path.resolve('dist'),
		filename: "fakerator.js",
		library: "Fakerator",
		libraryTarget: "umd"
	},

	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env' : {
				NODE_ENV : JSON.stringify('production')
			}
		}),
		new webpack.BannerPlugin(banner, {
			raw: true
		})
	],

	resolve: {
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