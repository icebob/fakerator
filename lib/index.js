//import { defaults } from "lodash";
var _ = require("lodash");
var mersenne = require("../vendor/mersenne");

var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

module.exports = function(localeID, seed) {
	var self = this;
	localeID = localeID || "default";

	console.log("Load " + localeID + " locale");

	var locale = require("./locales/" + localeID);

	if (locale) {
		if (locale._meta.id != "default") {
			var fallbackID = locale._meta.fallback || "default"
			var fbLocale = require("./locales/" + fallbackID);
			if (fbLocale) {
				console.log("Fallback " + fallbackID + " loaded.");
				// Merge locale and fallback
				locale = _.defaultsDeep(locale, fbLocale);
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

	self.random = {
		number: function(min, max, precision) {
			min = min || 0;
			max = max || 99999;
			precision = precision || 1; // TODO initial value in es6

			return precision * Math.floor( mersenne.rand(max / precision, min / precision) );
		},

		arrayElement: function(array) {
			return array[self.random.number(0, array.length - 1)];
		},

		objectElement: function(obj) {
			var array = Object.keys(obj);
			var key = self.random.arrayElement(array);
			/*
			return {
				[key]: object[key]
			}*/
		}

	};

	self.slugify = function (str) {
		if (str)
			return str.replace(/ /g, '-').replace(/[^\w\.\-]+/g, '');
	};

	self.replaceSymbol = function (format, numberSymbol, alphaSymbol) {
		if (!format) return;
		debugger;
		numberSymbol = numberSymbol || "#";
		alphaSymbol = alphaSymbol || "?";

		var str = '';
		for (var i = 0; i < format.length; i++) {
			if (format.charAt(i) == numberSymbol)
				str += self.random.number(0, 9);

			else if (format.charAt(i) == alphaSymbol)
				str += self.random.arrayElement(alpha);

			else
				str += format.charAt(i);
		}
		return str;
	};

	self.shuffle = function (o) {
		for (var j, x, i = o.length-1; i; j = self.random.number(0, i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};


	self.get = function(format) {
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

		// Replace symbols
		res = self.replaceSymbol(res);

		return res;
	};



	return self;
}