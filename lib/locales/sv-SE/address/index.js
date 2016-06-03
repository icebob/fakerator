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
		"Blekinge",
		"Dalarna",
		"Gotland",
		"Gävleborg",
		"Göteborg",
		"Halland",
		"Jämtland",
		"Jönköping",
		"Kalmar",
		"Kronoberg",
		"Norrbotten",
		"Skaraborg",
		"Skåne",
		"Stockholm",
		"Södermanland",
		"Uppsala",
		"Värmland",
		"Västerbotten",
		"Västernorrland",
		"Västmanland",
		"Älvsborg",
		"Örebro",
		"Östergötland"
	],
	
	stateAbbr: [	
	],

	city: [
		"#{address.cityPrefix}#{address.citySuffix}"
	],

	cityPrefix: [
		"Söder",
		"Norr",
		"Väst",
		"Öster",
		"Aling",
		"Ar",
		"Av",
		"Bo",
		"Br",
		"Bå",
		"Ek",
		"En",
		"Esk",
		"Fal",
		"Gäv",
		"Göte",
		"Ha",
		"Helsing",
		"Karl",
		"Krist",
		"Kram",
		"Kung",
		"Kö",
		"Lyck",
		"Ny"
	],

	citySuffix: [
		"stad",
		"land",
		"sås",
		"ås",
		"holm",
		"tuna",
		"sta",
		"berg",
		"löv",
		"borg",
		"mora",
		"hamn",
		"fors",
		"köping",
		"by",
		"hult",
		"torp",
		"fred",
		"vik"
	],

	street: [
		"#{address.streetName} #{address.buildingNumber}"
	],

	streetName: [
		"#{address.streetRoot}#{address.streetSuffix}",
		"#{address.streetNames.prefix} #{address.streetRoot}#{address.streetSuffix}",
		"#{names.firstName}#{address.commonStreetSuffix}",
		"#{names.lastName}#{address.commonStreetSuffix}"	
	],

	streetPrefix: [
		"Västra",
		"Östra",
		"Norra",
		"Södra",
		"Övre",
		"Undre"
	],

	streetRoot: [
		"Björk",
		"Järnvägs",
		"Ring",
		"Skol",
		"Skogs",
		"Ny",
		"Gran",
		"Idrotts",
		"Stor",
		"Kyrk",
		"Industri",
		"Park",
		"Strand",
		"Skol",
		"Trädgård",
		"Ängs",
		"Kyrko",
		"Villa",
		"Ek",
		"Kvarn",
		"Stations",
		"Back",
		"Furu",
		"Gen",
		"Fabriks",
		"Åker",
		"Bäck",
		"Asp"	
	],

	streetSuffix: [
		"vägen",
		"gatan",
		"gränden",
		"gärdet",
		"allén"	
	],

	commonStreetSuffix: [
		"s Väg",
		"s Gata"
	],

	buildingNumber: [
		"###",
		"##",
		"#"
	],

	postCode: [
		"#####"
	]

};