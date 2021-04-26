module.exports = {
	firstNameM: require("./firstNameMale"),
	firstNameF: require("./firstNameFemale"),
	lastNameM: require("./lastName"),
	lastNameF: require("./lastName"),

	prefix: [],
	suffix: [],

	nameM: [
		"#{names.firstNameM} #{names.lastName}",
		"#{names.firstNameM} #{names.lastName}",
		"#{names.firstNameM} #{names.lastName} #{names.firstNameM}",
	],

	nameF: [
		"#{names.firstNameF} #{names.lastName}",
		"#{names.firstNameF} #{names.lastName}",
		"#{names.firstNameF} #{names.lastName} #{names.firstNameF}",
	]
}
