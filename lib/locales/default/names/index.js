module.exports = {
	// Male first name
	firstNameM: require("./firstNameMale"),

	// Femail first name
	firstNameF: require("./firstNameFemale"),

	// First name
	firstName: [
		"#{names.firstNameM}",
		"#{names.firstNameF}"
	],

	// Male last name
	lastNameM: require("./lastName"),

	// Female last name
	lastNameF: require("./lastName"),

	// Last name
	lastName: [
		"#{names.lastNameM}",
		"#{names.lastNameF}"
	],

	prefix: [
		"Mr.",
		"Mrs.",
		"Ms.",
		"Miss",
		"Dr."
	],

	suffix: [
		"Jr.",
		"Sr.",
		"I",
		"II",
		"III",
		"IV",
		"V",
		"MD",
		"DDS",
		"PhD",
		"DVM"		
	],

	nameM: [
		"#{names.prefix} #{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM} #{names.suffix}",
		"#{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM}",
		"#{names.firstNameM} #{names.lastNameM}"	
	],

	nameF: [
		"#{names.prefix} #{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF} #{names.suffix}",
		"#{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF}",
		"#{names.firstNameF} #{names.lastNameF}"	
	],

	name: [
		"#{names.nameM}",
		"#{names.nameF}"
	]
}