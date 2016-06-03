module.exports = {
	// Male first name
	firstNameM: require("./firstNameM"),

	// Femail first name
	firstNameF: require("./firstNameF"),

	// Male last name
	lastNameM: require("./lastName"),

	// Female last name
	lastNameF: require("./lastName"),

	prefix: [
		"Dr.",
		"Prof.",
		"PhD."
	],

	suffix: [],

	nameM: [
		"#{names.prefix} #{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM}"
	],

	nameF: [
		"#{names.prefix} #{names.firstNameM} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF}"
	]

};