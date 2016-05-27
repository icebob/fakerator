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
		"Baden-Württemberg",
		"Bayern",
		"Berlin",
		"Brandenburg",
		"Bremen",
		"Hamburg",
		"Hessen",
		"Mecklenburg-Vorpommern",
		"Niedersachsen",
		"Nordrhein-Westfalen",
		"Rheinland-Pfalz",
		"Saarland",
		"Sachsen",
		"Sachsen-Anhalt",
		"Schleswig-Holstein",
		"Thüringen"
	],
	stateAbbr: [
		"BW",
		"BY",
		"BE",
		"BB",
		"HB",
		"HH",
		"HE",
		"MV",
		"NI",
		"NW",
		"RP",
		"SL",
		"SN",
		"ST",
		"SH",
		"TH"	
	],

	city: [
		"#{address.cityPrefix} #{names.firstName}#{address.citySuffix}",
		"#{address.cityPrefix} #{names.firstName}",
		"#{names.firstName}#{address.citySuffix}",
		"#{names.lastName}#{address.citySuffix}"
	],

	cityPrefix: [
		"Nord",
		"Ost",
		"West",
		"Süd",
		"Neu",
		"Alt",
		"Bad"
	],

	citySuffix: [
		"stadt",
		"dorf",
		"land",
		"scheid",
		"burg"
	],

	street: [
		"#{address.streetName} #{address.buildingNumber}"
	],

	streetName: require("./streetName"),

	streetSuffix: [],

	buildingNumber: [
		"###",
		"##",
		"#",
		"##a",
		"##b",
		"##c"
	],

	postCode: [
		"#####"
	]

};