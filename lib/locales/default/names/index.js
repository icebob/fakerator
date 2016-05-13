module.exports = {
	firstName: require("./firstName"),
	lastName: require("./lastName"),
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
	name: [
		"#{names.prefix} #{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName} #{names.suffix}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}",
		"#{names.firstName} #{names.lastName}"	
	],
}