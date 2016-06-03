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

	city: [
		"#{address.cityName}#{address.citySuffix}"
	],

	cityName: [
		"Fet",
		"Gjes",
		"Høy",
		"Inn",
		"Fager",
		"Lille",
		"Lo",
		"Mal",
		"Nord",
		"Nær",
		"Sand",
		"Sme",
		"Stav",
		"Stor",
		"Tand",
		"Ut",
		"Vest"	
	],

	citySuffix: [
		"berg",
		"borg",
		"by",
		"bø",
		"dal",
		"eid",
		"fjell",
		"fjord",
		"foss",
		"grunn",
		"hamn",
		"havn",
		"helle",
		"mark",
		"nes",
		"odden",
		"sand",
		"sjøen",
		"stad",
		"strand",
		"strøm",
		"sund",
		"vik",
		"vær",
		"våg",
		"ø",
		"øy",
		"ås"
	],

	street: [
		"#{address.streetName}#{address.streetSuffix}",
		"#{address.streetPrefix} #{address.streetName}#{address.streetSuffix}",
		"#{names.firstName}#{address.commonStreetSuffix}",
		"#{names.lastName}#{address.commonStreetSuffix}"
	],

	streetName: require("./streetName"),

	streetPrefix: [
		"Øvre",
		"Nedre",
		"Søndre",
		"Gamle",
		"Østre",
		"Vestre"
	],

	streetSuffix: require("./streetSuffix"),

	commonStreetSuffix: [
		"sgate",
		"svei",
		"s Gate",
		"s Vei",
		"gata",
		"veien"	
	],

	buildingNumber: [
		"#",
		"##"
	],

	postCode: [
		"####",
		"####",
		"####",
		"0###"
	]

};