module.exports = {
	// Male first name
	firstNameM: require("./firstName"),

	// Femail first name
	firstNameF: require("./firstName"),

	// Male last name
	lastNameM: require("./lastName"),

	// Female last name
	lastNameF: require("./lastName"),

	prefix: [
		"Pan",
		"Pani"
	],

	suffix: [],

	name: [
		"#{names.prefix} #{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}"
	],

	nameM: module.exports.name,
	nameF: module.exports.name

};