import isNil from "lodash/isNil";
import isArray from "lodash/isArray";
import isFunction from "lodash/isFunction";
import isObject from "lodash/isObject";
import mergeWith from "lodash/mergeWith";

import Fakerator from "../fakerator";

module.exports = function() {
	let self = this;

	let locale = require("./hu-HU");
	let fbLocale = require("./default");

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