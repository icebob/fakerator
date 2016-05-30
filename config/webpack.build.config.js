var webpack = require("webpack");
var path = require("path");
var del = require("del");
var fs = require("fs");
var glob = require("glob");

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
	})/*,
	merge(wpBaseConfig, {
		entry: path.resolve('lib', 'locales', 'locale-build.js'),
		output: {
			path: "./dist/locales",
			filename: "hu-HU.js",
			library: "Fakerator",
			libraryTarget: "umd"
		}
	})*/
];

del.sync(["./dist/**"]);


(function() {
	var localeDirs = glob.sync("./lib/locales/*/");

	//console.log("asd", localeDirs);

	var wrapper = fs.readFileSync(path.join(".", "lib", "locales", "locale-build.js")).toString();

	localeDirs.forEach(function(dir) {

		if (fs.existsSync(path.join(dir, "index.js"))) {
			//var locale = require(path.join("..", dir, "index"));
			var localeID = dir.split("/")[3];
			var fallbackID = "default";

			//console.log(localeID);
			var fName = path.join(dir, "build.js");

			var content = wrapper.replace("%%LOCALEID%%", localeID).replace("%%FALLBACKID%%", fallbackID);

			fs.writeFileSync(fName, content);
		}
	});

})();

var buildFiles = glob.sync("./lib/locales/**/build.js");

//console.log(buildFiles);

buildFiles.forEach(function(localeFile) {

	var localeID = localeFile.split("/")[3];
	//console.log(localeFile, localeID);

	module.exports.push(merge(wpBaseConfig, {
		entry: localeFile,
		output: {
			path: "./dist/locales",
			filename: localeID + ".js",
			library: "Fakerator",
			libraryTarget: "umd"
		}
	}));

	module.exports.push(merge(wpBaseConfig, {
		entry: localeFile,
		output: {
			path: "./dist/locales",
			filename: localeID + ".min.js",
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
	}));

});

