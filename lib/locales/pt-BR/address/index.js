import countries from "./countryWithCodes";

module.exports = {
	countryAndCode() {
		let country = this.random.objectElement(countries);
		return {
			code: Object.keys(country)[0],
			name: country[Object.keys(country)[0]]
		};
	},

	geoLocation() {
		return {
			latitude: (this.random.number(180 * 10000) / 10000.0 - 90.0),
			longitude: (this.random.number(360 * 10000) / 10000.0 - 180.0)
		};
	},

	state: [
		'Acre',
		'Alagoas',
		'Amazonas',
		'Amapá',
		'Bahia',
		'Ceará',
		'Distrito Federal',
		'Espírito Santo',
		'Goiás',
		'Maranhão',
		'Minas Gerais',
		'Mato Grosso do Sul',
		'Mato Grosso',
		'Pará',
		'Paraíba',
		'Pernambuco',
		'Piauí',
		'Paraná',
		'Rio de Janeiro',
		'Rio Grande do Norte',
		'Rondônia',
		'Roraima',
		'Rio Grande do Sul',
		'Santa Catarina',
		'Sergipe',
		'São Paulo',
		'Tocantins',		
	],

	stateAbbr: [
		'AC',
		'AL',
		'AM',
		'AP',
		'BA',
		'CE',
		'DF',
		'ES',
		'GO',
		'MA',
		'MG',
		'MS',
		'MT',
		'PA',
		'PB',
		'PE',
		'PI',
		'PR',
		'RJ',
		'RN',
		'RO',
		'RR',
		'RS',
		'SC',
		'SE',
		'SP',
		'TO',
	],

	postCode: [
		"#####-###"
	],

	street: [
		"#{address.streetName} #{address.buildingNumber}",
		"#{address.streetName} #{address.buildingNumber}",
		"#{address.streetName} #{address.buildingNumber} Apto ###",
		"#{address.streetName} #{address.buildingNumber} Casa ###"
	],

	streetName: [
		"#{address.streetSuffix} #{names.firstName}",
		"#{address.streetSuffix} #{names.lastName}"	
	],

	streetSuffix: [
		"Alameda",
		"Avenida",
		"Praça",
		"Rodovia",
		"Rua",
	],
};
