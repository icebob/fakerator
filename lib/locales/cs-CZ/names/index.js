module.exports = {
	// Male first name
	firstNameM: require("./firstNameM"),

	// Femail first name
	firstNameF: require("./firstNameF"),

	// Male last name
	lastNameM: require("./lastNameM"),

	// Female last name
	lastNameF: require("./lastNameF"),

	prefix: [
		"Ing.",
		"Mgr.",
		"JUDr.",
		"MUDr."
	],

	suffix: [
		"Phd."
	],

	nameM: [
		"#{names.prefix} #{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM} #{names.suffix}",
		"#{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM}"
	],

	nameF: [
		"#{names.prefix} #{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF} #{names.suffix}",
		"#{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF}"
	]

};