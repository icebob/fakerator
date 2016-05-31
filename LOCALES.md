# How to add a locale

1. Create a subfolder in `lib/locales`. Please use 2 digit language codes and 2 digit country codes. E.g: `it-IT`, `fr-CA`
Use codes from [here](http://www.lingoes.net/en/translator/langcode.htm)

2. Create an `index.js` and set metadata informations to `_meta` property. 
  ```js
  module.exports = {
  	_meta: {
  		id: "fr-FR", // Locale code
  		fallback: null, // Fallback locale code, if null, fallback will be the 'default' locale
  		language: "French", // Language name
  		country: "France", // Default country name
  		countryCode: "FR" // Default country code
  	},
  
  	names: require("./names"),
  	phone: require("./phone"),
  	address: require("./address"),
  	company: require("./company"),
  	internet: require("./internet")
  };
  ```

3. Copy an existing locale files to your new locale directory
4. Override or add your locale data to files
5. Cover your locale with test: [example](https://github.com/icebob/fakerator/blob/master/test/specs/locales/fr-FR/index.spec.js). Use `npm run ci` under development.
6. Run `npm test`
7. If every test passed, create a [PR](https://github.com/icebob/fakerator/pulls) with the new locale
