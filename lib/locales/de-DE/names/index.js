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
		"Hr.",
		"Fr.",
		"Dr.",
		"Prof. Dr."
	],

	nobilityTitlePrefix: require("./nobilityTitlePrefix"),

	suffix: [],

	name: [
		"#{names.prefix} #{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.nobilityTitlePrefix} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}"
	],

	nameM: module.exports.name,
	nameF: module.exports.name

};