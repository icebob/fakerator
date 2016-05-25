module.exports = {
	// Male first name
	firstNameM: require("./firstNameMale"),

	// Femail first name
	firstNameF: require("./firstNameFemale"),

	// Male last name
	lastNameM: require("./lastName"),

	// Female last name
	lastNameF: require("./lastName"),

	prefix: [],

	suffix: [],

	nameM: [
		"#{names.lastName} #{names.firstNameM}",
		"#{names.lastName} #{names.firstNameM}",
		"#{names.lastName} #{names.firstNameM} #{names.firstNameM}"
	],

	nameF: [
		"#{names.lastName} #{names.firstNameF}",
		"#{names.lastName} #{names.firstNameF}",
		"#{names.lastName} #{names.firstNameF} #{names.firstNameF}"
	]

};