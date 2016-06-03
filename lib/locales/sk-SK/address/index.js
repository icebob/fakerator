import countries from "./countryWithCodes";

module.exports = {
	countryAndCode() {
		let country = this.random.objectElement(countries);
		return {
			code: Object.keys(country)[0],
			name: country[Object.keys(country)[0]]
		};
	},

	state: [
	],
	
	stateAbbr: [	
	],

	city: require("./city"),

	street: [
		"#{address.streetName} #{address.buildingNumber}"
	],

	streetName: require("./streetName"),

	streetSuffix: [],

	buildingNumber: [
		"#",
		"##",
		"###"
	],

	postCode: [
		"#####",
		"### ##",
		"## ###"
	]

};