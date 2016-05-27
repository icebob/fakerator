module.exports = {
	// Male first name
	firstNameM: require("./firstNameMale"),

	// Femail first name
	firstNameF: require("./firstNameFemale"),

	// Male middle name
	middleNameM: require("./middleNameMale"),

	// Femail middle name
	middleNameF: require("./middleNameFemale"),

	// Male last name
	lastNameM: require("./lastNameMale"),

	// Female last name
	lastNameF: require("./lastNameFemale"),

	prefix: [],

	suffix: [],

	nameM: [
		"#{names.firstNameM} #{names.lastNameM}",
		"#{names.lastNameM} #{names.firstNameM}",
		"#{names.firstNameM} #{names.middleNameM} #{names.lastNameM}",
		"#{names.lastNameM} #{names.firstNameM} #{names.middleNameM}"

	],

	nameF: [
		"#{names.firstNameM} #{names.lastNameF}",
		"#{names.lastNameF} #{names.firstNameM}",
		"#{names.firstNameM} #{names.middleNameF} #{names.lastNameF}",
		"#{names.lastNameF} #{names.firstNameM} #{names.middleNameF}"
	]

};