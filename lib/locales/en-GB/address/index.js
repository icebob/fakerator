import countries from "./countryWithCodes";

module.exports = {
	countryAndCode() {
		let country = this.random.objectElement(countries);
		return {
			code: Object.keys(country)[0],
			name: country[Object.keys(country)[0]]
		};
	},

	country() {
		return this.address.countryAndCode().name;
	},

	countryCode() {
		return this.address.countryAndCode().code;
	},

	state: require("./county"),

	city: require("./cityName"),

	street: [
		"#{address.buildingNumber} #{address.streetName}",
		"#{address.buildingNumber} #{address.streetName}",
	],

	streetName: [
		"#{names.firstName} #{address.streetSuffix}",
		"#{names.lastName} #{address.streetSuffix}"
	],

	streetSuffix: [
		"Street",
		"Road",
		"Way",
		"Avenue",
		"Drive",
		"Grove",
		"Lane",
		"Gardens",
		"Place",
		"Crescent",
		"Close",
		"Square",
		"Hill",
		"Circus",
		"Mews",
		"Vale",
		"Dene",
		"Rise",
		"Mead",
		"Court",
		"Yard",
	],


	buildingNumber: [
		"####",
		"###",
		"##",
		"#",
	],

	postCode: [
		"??## #??",
		"??# #??"
	],
};
