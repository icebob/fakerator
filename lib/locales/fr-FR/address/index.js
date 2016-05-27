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
		"Alsace",
		"Aquitaine",
		"Auvergne",
		"Basse-Normandie",
		"Bourgogne",
		"Bretagne",
		"Centre",
		"Champagne-Ardenne",
		"Corse",
		"Franche-Comté",
		"Haute-Normandie",
		"Île-de-France",
		"Languedoc-Roussillon",
		"Limousin",
		"Lorraine",
		"Midi-Pyrénées",
		"Nord-Pas-de-Calais",
		"Pays de la Loire",
		"Picardie",
		"Poitou-Charentes",
		"Provence-Alpes-Côte d'Azur",
		"Rhône-Alpes"
	],
	stateAbbr: [],

	city: require("./cityName"),

	street: [
		"#{address.buildingNumber} #{address.streetName}"
	],

	streetName: [
		"#{address.streetPrefix} #{address.streetSuffix}"
	],

	streetPrefix: require("./streetPrefix"),
	
	streetSuffix: require("./streetSuffix"),

	buildingNumber: [
		"####",
		"###",
		"##",
		"#"
	],

	postCode: [
		"#####"
	]

};