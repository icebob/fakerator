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
		"Dolnośląskie",
		"Kujawsko-pomorskie",
		"Lubelskie",
		"Lubuskie",
		"Łódzkie",
		"Małopolskie",
		"Mazowieckie",
		"Opolskie",
		"Podkarpackie",
		"Podlaskie",
		"Pomorskie",
		"Śląskie",
		"Świętokrzyskie",
		"Warmińsko-mazurskie",
		"Wielkopolskie",
		"Zachodniopomorskie"
	],
	stateAbbr: [
		"DŚ",
		"KP",
		"LB",
		"LS",
		"ŁD",
		"MP",
		"MZ",
		"OP",
		"PK",
		"PL",
		"PM",
		"ŚL",
		"ŚK",
		"WM",
		"WP",
		"ZP"
	],

	city: require("./cityName"),

	street: [
		"#{address.streetName} #{address.buildingNumber}"
	],

	streetName: [
		"#{address.streetPrefix} #{names.lastName}"
	],

	streetPrefix: [
		"ul.",
		"al."	
	],

	buildingNumber: [
		"#####",
		"####",
		"###"
	],

	postCode: [
		"##-###"
	]

};