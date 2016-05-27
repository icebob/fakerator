import get from "lodash/get";
import each from "lodash/each";
import capitalize from "lodash/capitalize";
import isNil from "lodash/isNil";
import isArray from "lodash/isArray";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import isNumber from "lodash/isNumber";
import isObject from "lodash/isObject";
import mergeWith from "lodash/mergeWith";

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
				// Merge locale and fallback
				locale = mergeWith(locale, fbLocale, (objValue) => {
					// DON'T MERGE ARRAYS
					if (isArray(objValue))
						return objValue;
					
					if (!isNil(objValue) && !isObject(objValue))
						return objValue;
				});
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

		boolean(likelihood = 50) {
			return self.random.number(0, 100) <= likelihood;
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

		string(len = {}) {
			let res = [];
			if (isObject(len))
				len = self.random.number(len.min || 5, len.max || 10);

			for(let i = 0; i < len; i++)
				res.push(self.random.letter());
			return res.join("");
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
		if (isNil(format)) return;

		let res = format;
		res = format.replace(maskRE, function(match, cap) {
			// Kikeressük van-e ilyen a locale-ban
			let part = get(self.locale, cap);
			if (part) {
				if (isFunction(part)) {
					part = part.call(self, ...args);
				}
				
				if (isArray(part)) {
					if (part.length == 0)
						return;

					// Ha tömböt kaptunk, akkor abból random választunk és rekurzívan hívunk,
					// mert lehet abban is egy mask van
					return self.populate(self.random.arrayElement(part), ...args);
				}
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

		if (isObject(n))
			n = this.random.number(n.min || 1, n.max || 10);

		for(let i = 0; i < n; i++)
			res.push(func.call(self, ...args));

		return res;
	};

	self.utimes = function(func, n, ...args) {
		let res = [];

		if (isObject(n))
			n = this.random.number(n.min || 1, n.max || 10);

		let i = 0;
		while (res.length < n && i < n * 5) {
			let item = func.call(self, ...args);
			if (res.indexOf(item) == -1)
				res.push(item);

			i++;
		}

		return res;
	};

	// Generate fake data by locale definition
	self.generate = function(def, ...args) {
		let res;

		//console.log("generate", def, args);

		if (isFunction(def)) {
			//console.log("isFunction", def);
			res = def.call(self, ...args);
		}		
		else if (isArray(def)) {
			//console.log("isArray", def);
			if (def.length >= 0)
				res = self.random.arrayElement(def);
		}
		else if (isString(def)) {
			//console.log("isString", def);
			// Ha szöveg, akkor rekurzívan hívunk mert lehet az is mask
			if (maskRE.test(def))
				res = self.populate(def, ...args);
			else
				return res = self.replaceSymbols(def);
		}
		else if (isNumber(def) || isObject(def)) {
			//console.log("isNumber!Object", def);
			// Ha szám, vagy objektum akkor visszatérünk
			return def;
		}

		if (res)
			return self.generate(res, ...args);
	};

	/*function createGeneratorMethods(obj, definitions, level) {
		each(Object.keys(definitions), (item) => {
			if (item === "_meta") return;

			console.log(item);
			let def = definitions[item];			
			if (isObject(def) && level < 2) {
				obj[item] = {};
				createGeneratorMethods(obj[item], def, level + 1);
			}
			else {
				obj[item] = function(...args) {
					return self.generate(def, ...args);
				};
			}
		});
	}*/

	//createGeneratorMethods(self, self.locale, 1);

	
	// Set helper functions from locale definitions
	each(Object.keys(self.locale), (category) => {
		if (category === "_meta") return;

		each(Object.keys(self.locale[category]), (item) => {
			self[category] = self[category] || {};

			self[category][item] = function(...args) {
				return self.generate(self.locale[category][item], ...args);
			};

			//console.log("Set " + category + "." + item);
		});
	});

	return self;
};