import isNil from "lodash/isNil";
import isArray from "lodash/isArray";
import isFunction from "lodash/isFunction";
import isObject from "lodash/isObject";
import mergeWith from "lodash/mergeWith";

import Fakerator from "./fakerator";

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
					if (isArray(objValue) || isFunction(objValue))
						return objValue;
					
					if (!isNil(objValue) && !isObject(objValue))
						return objValue;
				});
			}
		}
	} else {
		locale = require("./locales/default/index");
	}

	return new Fakerator(locale);
};