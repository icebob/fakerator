import countries from "./countryWithCodes";

module.exports = {
	countryAndCode() {
		let country = this.random.objectElement(countries);
		return {
			code: Object.keys(country)[0],
			name: country[Object.keys(country)[0]]
		};
	},

	state: require("./state"),

	stateAbbr: require("./stateAbbr"),

	city: [
		"#{address.cityPrefix} #{names.firstName} #{address.citySuffix}",
		"#{address.cityPrefix} #{names.firstName}",
		"#{names.firstName} #{address.citySuffix}",
		"#{names.lastName} #{address.citySuffix}"
	],

	cityPrefix: [
		"San",
		"Borgo",
		"Sesto",
		"Quarto",
		"Settimo"
	],

	citySuffix: [
		"a mare",
		"lido",
		"ligure",
		"del friuli",
		"salentino",
		"calabro",
		"veneto",
		"nell'emilia",
		"umbro",
		"laziale",
		"terme",
		"sardo"
	],

	street: [
		"#{address.streetName} #{address.buildingNumber}",
		"#{address.streetName} #{address.buildingNumber}, Appartamento ##",
		"#{address.streetName} #{address.buildingNumber}, Piano ##"
	],

	streetName: [
		"#{address.streetSuffix} #{names.firstName}",
		"#{address.streetSuffix} #{names.lastName}"
	],

	streetPrefix: require("./streetPrefix"),

	buildingNumber: [
		"###",
		"##",
		"#"
	],

	postCode: [
		"#####"
	]

};