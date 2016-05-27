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
		"Andalucía",
		"Aragón",
		"Principado de Asturias",
		"Baleares",
		"Canarias",
		"Cantabria",
		"Castilla-La Mancha",
		"Castilla y León",
		"Cataluña",
		"Comunidad Valenciana",
		"Extremadura",
		"Galicia",
		"La Rioja",
		"Comunidad de Madrid",
		"Navarra",
		"País Vasco",
		"Región de Murcia"
	],
	stateAbbr: [
		"And",
		"Ara",
		"Ast",
		"Bal",
		"Can",
		"Cbr",
		"Man",
		"Leo",
		"Cat",
		"Com",
		"Ext",
		"Gal",
		"Rio",
		"Mad",
		"Nav",
		"Vas",
		"Mur"
	],

	city: require("./cityName"),

	street: [
		"#{address.streetName}#{address.buildingNumber}",
		"#{address.streetName}#{address.buildingNumber} Esc. ###",
		"#{address.streetName}#{address.buildingNumber} Puerta ###"
	],

	streetName: [
		"#{address.streetSuffix} #{names.firstName}",
		"#{address.streetSuffix} #{names.firstName} #{names.lastName}"
	],

	streetSuffix: require("./streetSuffix"),

	buildingNumber: [
		" s/n.",
		", #",
		", ##",
		" #",
		" ##"
	],

	postCode: [
		"#####"
	]

};