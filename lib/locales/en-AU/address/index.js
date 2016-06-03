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
		"New South Wales",
		"Queensland",
		"Northern Territory",
		"South Australia",
		"Western Australia",
		"Tasmania",
		"Australian Capital Territory",
		"Victoria"
	],
	stateAbbr: [
		"NSW",
		"QLD",
		"NT",
		"SA",
		"WA",
		"TAS",
		"ACT",
		"VIC"
	],

	buildingNumber: [
		"####",
		"###",
		"##"
	],

	postCode: [
		"0###",
		"2###",
		"3###",
		"4###",
		"5###",
		"6###",
		"7###"
	]

};