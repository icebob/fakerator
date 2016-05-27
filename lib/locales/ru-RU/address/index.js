import countries from "./countryWithCodes";

module.exports = {
	countryAndCode() {
		let country = this.random.objectElement(countries);
		return {
			code: Object.keys(country)[0],
			name: country[Object.keys(country)[0]]
		};
	},

	state: require("./state"),
	stateAbbr: [],

	city: [
		"Москва",
		"Владимир",
		"Санкт-Петербург",
		"Новосибирск",
		"Екатеринбург",
		"Нижний Новгород",
		"Самара",
		"Казань",
		"Омск",
		"Челябинск",
		"Ростов-на-Дону",
		"Уфа",
		"Волгоград",
		"Пермь",
		"Красноярск",
		"Воронеж",
		"Саратов",
		"Краснодар",
		"Тольятти",
		"Ижевск",
		"Барнаул",
		"Ульяновск",
		"Тюмень",
		"Иркутск",
		"Владивосток",
		"Ярославль",
		"Хабаровск",
		"Махачкала",
		"Оренбург",
		"Новокузнецк",
		"Томск",
		"Кемерово",
		"Рязань",
		"Астрахань",
		"Пенза",
		"Липецк",
		"Тула",
		"Киров",
		"Чебоксары",
		"Курск",
		"Брянскm Магнитогорск",
		"Иваново",
		"Тверь",
		"Ставрополь",
		"Белгород",
		"Сочи"
	],

	street: [
		"#{address.streetName}, #{address.buildingNumber}"
	],

	streetName: [
		"#{address.streetSuffix} #{address.streetTitle}",
		"#{address.streetTitle} #{address.streetSuffix}"
	],

	streetTitle: require("./streetTitle"),

	streetSuffix: [
		"ул.",
		"улица",
		"проспект",
		"пр.",
		"площадь",
		"пл."
	],

	buildingNumber: [
		"###"
	],

	postCode: [
		"######"
	]

};