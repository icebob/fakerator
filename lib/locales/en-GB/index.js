module.exports = {
	_meta: {
		id: "en-GB",
		fallback: null,
		mask: "\#\{([A-Za-z0-9_\.]+)\}",
		language: "English (United Kingdom)",
		country: "United Kingdom",
		countryCode: "GB"
	},

	names: require("./names"),
	phone: require("./phone"),
	address: require("./address"),
	company: require("./company"),
	internet: require("./internet"),
	lorem: require("./lorem"),
	date: require("./date"),
	misc: require("./misc"),
	entity: require("./entity")
};
