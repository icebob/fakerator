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
		"M",
		"Mme",
		"Mlle",
		"Dr",
		"Prof"
	],

	suffix: [],

	name: [
		"#{names.prefix} #{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.lastName} #{names.firstName}"
	],

	nameM: module.exports.name,
	nameF: module.exports.name

};