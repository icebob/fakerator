module.exports = {
	name: [
		"#{names.lastName} #{company.suffix}",
		"#{names.lastName}-#{names.lastName} #{company.suffix}",
		"#{names.lastName}, #{names.lastName} and #{names.lastName} #{company.suffix}"
	],

	suffix: [
		"Ltd.",
		"Inc.",
		"Corp.",
		"LLC",
		"Group"	
	]
}