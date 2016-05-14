module.exports = {
	_meta: {
		id: "default",
		fallback: null,
		mask: "\#\{([A-Za-z_\.]+)\}",
		language: "English",
		country: "Great Britain"
	},

	names: require("./names"),
	phone: require("./phone"),
	address: require("./address"),
	company: require("./company"),
	internet: require("./internet"),
	lorem: require("./lorem"),
	date: require("./date")
}