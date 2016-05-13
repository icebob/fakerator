//import { defaults } from "lodash";
var _ = require("lodash");
var mersenne = require("../vendor/mersenne");

module.exports = function(localeID, seed) {
	var self = this;
	localeID = localeID || "default";

	console.log("Load " + localeID + " locale");

	var locale = require("./locales/" + localeID);

	if (locale) {
		if (locale.fallback) {
			var fallback = require("./locales/" + locale.fallback);
			if (fallback) {
				console.log("Fallback " + locale.fallback + "loaded.");

				locale = _.defaults(locale, fallback);
			}
		}
	} else {
		locale = require("./locales/default");
	}

	//console.log(locale);

	self.locale = locale;

	// Set seed for random
	if (seed) {
		if (_.isArray(seed) && seed.length > 0)
			mersenne.seed_array(seed);
		else
			mersenne.seed(seed);
	}

	function randomNumber(min, max, precision) {
		min = min || 0;
		max = max || 99999;
		precision = precision || 1; // TODO initial value in es6

		return precision * Math.floor( mersenne.rand(max / precision, min / precision) );
	}

	self.random = {
		number: randomNumber,

		arrayElement: function(array) {
			return array[randomNumber(0, array.length - 1)];
		},

		objectElement: function(obj) {
			var array = Object.keys(obj);
			var key = self.random.arrayElement(array);
			/*
			return {
				[key]: object[key]
			}*/
		}

	}

	self.get = function(format) {
		debugger;
		var res = format;
		if (format.indexOf("#{") != -1) {
			res = format.replace(/\#\{([A-Za-z_\.]+)\}/g, function(match, cap) {
				// Kikeressük van-e ilyen a locale-ban
				var part = _.get(self.locale, cap);
				if (part) {
					if (_.isArray(part))
						// Ha tömböt kaptunk, akkor abból random választunk és rekurzívan hívunk,
						// mert lehet abban is egy mask van
						return self.get(self.random.arrayElement(part));
					else (_.isString(part)) 
						// Ha szöveg, akkor rekurzívan hívünk mert lehet az is mask
						return self.get(part);
				} else 
					// Ha nincs, akkor marad ami volt
					return match;
			});
		}

		// TODO item = self.replaceSymbols(item);
		return res;
	}



	return self;
}