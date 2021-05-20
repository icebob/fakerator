module.exports = {
	name: [
		"#{company.preffix} #{names.lastName}",
		"#{names.lastName} #{company.suffix}",
		"#{names.lastName}-#{names.lastName} #{company.suffix}",
		"#{names.lastName}, #{names.lastName} and #{names.lastName} #{company.suffix}"
	],

	suffix: [
		"",
		"Ltda",
		"ME",
	],

	preffix: [
		"",
		"Grupo",
		"Associacao",
	],
};