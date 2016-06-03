import isNil from "lodash/isNil";
import isArray from "lodash/isArray";
import isFunction from "lodash/isFunction";
import isObject from "lodash/isObject";
import mergeWith from "lodash/mergeWith";

import Fakerator from "lib/fakerator";

module.exports = function() {
	let locale = require("lib/locales/sv-SE");
	let fbLocale = require("lib/locales/default");

	// Merge locale and fallback
	locale = mergeWith(locale, fbLocale, (objValue) => {
		// DON'T MERGE ARRAYS
		if (isArray(objValue) || isFunction(objValue))
			return objValue;
		
		if (!isNil(objValue) && !isObject(objValue))
			return objValue;
	});

	return new Fakerator(locale);
};