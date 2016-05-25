import countries from "./countryWithCodes";

module.exports = {
	countryAndCode() {
		let country = this.random.objectElement(countries);
		return {
			code: Object.keys(country)[0],
			name: country[Object.keys(country)[0]]
		};
	},

	state: [],
	stateAbbr: [],

	city: [
		"#{address.cityPrefix}#{address.citySuffix}",
		"#{address.cityPrefix}#{names.firstName}#{address.citySuffix}",
		"#{names.firstName}#{address.citySuffix}",
		"#{names.lastName}#{address.citySuffix}"
	],

	cityPrefix: [
		"Duna",
		"Zala",
		"Tisza",
		"Sajó",
		"Mátra",
		"Bükk",
		"Balaton",
		"Buda",
		"Pest",
		"Pilis",
		"Nagy",
		"Kis",
		"Felső",
		"Alsó",
		"Mező"
	],

	citySuffix: [
		"tető",
		"alja",
		"némedi",
		"vár",
		"újváros",
		"város",
		"füred",
		"hegy",
		"egyház",
		"háza",
		"szék",
		"keresztúr",
		"sziget",
		"szeg",
		"lak",
		"bánya"
	],

	street: [
		"#{address.streetName} #{address.buildingNumber}"
	],

	streetName: [
		"#{names.lastName} #{names.firstName} #{address.streetSuffix}"
	],

	streetSuffix: [
		"utca",
		"út",
		"tér",
		"sor",
		"köz",
		"tér",
		"dűlő",
		"park",
		"sétány",
		"udvar",
		"körút"	
	],

	buildingNumber: [
		"#",
		"##",
		"###",
		"##. #/#",
		"###. #. emelet #. ajtó"
	],

	postCode: [
		"####"
	]

};