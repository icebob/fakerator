module.exports = {
	name: [
		"#{company.prefix} #{names.firstNameF}",
		"#{company.prefix} #{names.firstNameM}",
		"#{company.prefix} #{names.lastNameM}",
		"#{company.prefix} #{company.suffix}#{company.suffix}",
		"#{company.prefix} #{company.suffix}#{company.suffix}#{company.suffix}",
		"#{company.prefix} #{address.city}#{company.suffix}",
		"#{company.prefix} #{address.city}#{company.suffix}#{company.suffix}",
		"#{company.prefix} #{address.city}#{company.suffix}#{company.suffix}#{company.suffix}"
	],

	prefix: [
		"ИП",
		"ООО",
		"ЗАО",
		"ОАО",
		"НКО",
		"ТСЖ",
		"ОП"	
	],

	suffix: [
		"Снаб",
		"Торг",
		"Пром",
		"Трейд",
		"Сбыт"
	]
};