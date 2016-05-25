import get from "lodash/get";
import each from "lodash/each";
import defaultsDeep from "lodash/defaultsDeep";
import capitalize from "lodash/capitalize";
import isNil from "lodash/isNil";
import isArray from "lodash/isArray";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import isNumber from "lodash/isNumber";
import isObject from "lodash/isObject";

const mersenne = require("../vendor/mersenne");

const chars = "abcdefghijklmnopqrstuvwxyz";
const any = "0123456789" + chars;


module.exports = function(localeID = "default") {
	let self = this;

	let locale;
	try {
		locale = require("./locales/" + localeID + "/index");
	} catch (e) {
		// ignored
	}
	
	if (locale) {
		if (localeID != "default") {
			let fallbackID = locale._meta.fallback || "default";
			let fbLocale = require("./locales/" + fallbackID + "/index");
			if (fbLocale) {
				//console.log("Fallback " + fallbackID + " loaded.");
				// Merge locale and fallback
				locale = defaultsDeep(locale, fbLocale);
			}
		}
	} else {
		locale = require("./locales/default/index");
	}
	self.locale = locale;

	// Set seed for 
	self.seed = (seed) => {
		if (isArray(seed) && seed.length > 0)
			mersenne.seed_array(seed);
		else
			mersenne.seed(seed);
	};

	self.random = {
		number(max = 9999, min = 0, precision = 1) {
			if (min > max) {
				// Swap values
				[min, max] = [max, min];
			}
			max /= precision;
			min /= precision;
			return precision * Math.floor( mersenne.rand(max + 1, min));
		},

		boolean() {
			return !!self.random.number(0, 1);
		},

		digit() {
			return self.random.number(9);
		},

		hex(len = 1) {
			let res = [];
			for(let i = 0; i < len; i++)
				res.push(self.random.number(15).toString(16));
			return res.join("");
		},

		letter() {
			return self.random.arrayElement(chars);
		},

		arrayElement(array) {
			if (array && array.length > 0)
				return array[self.random.number(array.length - 1)];
		},

		objectElement(obj) {
			if (!obj)  return;

			let key = self.random.arrayElement(Object.keys(obj));
			return {
				[key]: obj[key]
			};
		},

		masked(format) {
			if (isNil(format)) return;

			let result = [];
			for (let i = 0; i <= format.length ; i++) {
				if (format.charAt(i) === "9") 
					result.push(self.random.number(9).toString());
				else if (format.charAt(i) === "a") 
					result.push(self.random.arrayElement(chars));
				else if (format.charAt(i) === "A") 
					result.push(self.random.arrayElement(chars).toUpperCase());
				else if (format.charAt(i) === "*") 
					result.push(self.random.arrayElement(any));
				else 
					result.push(format.charAt(i));
			}
			return result.join("");
		}
	};

	self.capitalize = capitalize;

	self.slugify = function (str = "") {
		return str.trim().replace(/ /g, "-").replace(/[^\w\.\-]+/g, "");
	};

	self.replaceSymbols = function (format, numberSymbol = "#", alphaSymbol = "\\?") {
		if (format) 
			return format
				.replace(new RegExp(numberSymbol, "g"), self.random.digit)
				.replace(new RegExp(alphaSymbol, "g"), self.random.letter);
	};

	self.shuffle = function (o) {
		if (isNil(o)) return;
		for (let j, x, i = o.length-1; i; j = self.random.number(i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

	let maskRE = new RegExp(locale._meta.mask || "\#\{([A-Za-z0-9_\.]+)\}", "g");

	self.populate = function(format, ...args) {
		let res = format;
		res = format.replace(maskRE, function(match, cap) {
			// Kikeressük van-e ilyen a locale-ban
			let part = get(self.locale, cap);
			if (part) {
				if (isFunction(part)) {
					part = part.call(self, ...args);
				}
				
				if (isArray(part))
					// Ha tömböt kaptunk, akkor abból random választunk és rekurzívan hívunk,
					// mert lehet abban is egy mask van
					return self.populate(self.random.arrayElement(part), ...args);
				else if (isString(part)) 
					// Ha szöveg, akkor rekurzívan hívunk mert lehet az is mask
					return self.populate(part, ...args);
				else if (isNumber(part) || isObject(part)) 
					// Ha szám, vagy objektum akkor visszatérünk
					return part;
			}
			// Ha nincs, akkor marad ami volt
			return match;
		});

		// Replace symbols
		if (isString(res))
			res = self.replaceSymbols(res);

		return res;
	};

	self.times = function(func, n, ...args) {
		let res = [];

		if (isObject(n)) {
			n = this.random.number(n.min || 1, n.max || 10);
		}

		for(let i = 0; i < n; i++) {
			res.push(func.call(self, ...args));
		}

		return res;
	};

	// Set helper functions from locale
	each(Object.keys(self.locale), (category) => {
		if (category === "_meta") return;
		each(Object.keys(self.locale[category]), (item) => {
			self[category] = self[category] || {};

			if (isFunction(self.locale[category][item])) {
				// Ha a locale-ban ez is egy függvény, akkor meghívjuk közvetlen.
				// Ha a visszatérési érték pedig string, akkor ráhívjuk a populate-et
				self[category][item] = function(...args) {
					let res = self.locale[category][item].call(self, ...args);

					if (isArray(res))
						res = self.random.arrayElement(res);

					if (isString(res))
						res = self.populate(res, ...args);

					return res;
				};

			} else {
				// Ha nem, akkor simán a populate-t
				self[category][item] = function(...args) {
					return self.populate("#{" + category + "." + item + "}", ...args);
				};
			}
			//console.log("Set " + category + "." + item);
		});
	});

	return self;
};