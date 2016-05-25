import passwordGen from "vendor/password-generator";
import crypto from "crypto";

module.exports = {
	avatar: require("./avatar"),

	tld: require("./tld"),

	userName(firstName, lastName) {
		firstName = this.slugify(firstName ? firstName : this.populate("#{names.firstName}")).toLowerCase();
		lastName = this.slugify(lastName ? lastName : this.populate("#{names.lastName}")).toLowerCase();

		return this.populate(this.random.arrayElement([
			`${firstName}.${lastName}`,
			`${firstName}.${lastName}##`,
			`${firstName}.${lastName}####`,
			`${firstName}_${lastName}`,
			`${firstName}_${lastName}##`,
			`${firstName}${lastName}##`,
			`${firstName}##`
		]));
	},

	password(length, memorable, pattern, prefix) {
		return passwordGen(length, memorable, pattern, prefix);
	},

	domain() {
		return this.slugify(this.populate(this.random.arrayElement([
			"#{names.firstName}",
			"#{names.firstName}#{names.lastName}",
			"#{names.firstName}-#{names.lastName}"
		]))).toLowerCase() + "." + this.random.arrayElement(module.exports.tld);
	},

	url(isHttps, hasWWW) {
		if (isHttps == null) 
			isHttps = this.random.boolean();

		if (hasWWW == null) 
			hasWWW = !this.random.boolean();

		let prefix = isHttps ? "https://" : "http://";
		if (hasWWW)
			prefix += "www.";

		return prefix + this.internet.domain();
	},

	emailDomain: [
		"gmail.com",
		"yahoo.com",
		"hotmail.com"		
	],

	email(firstName, lastName) {
		firstName = this.slugify(firstName ? firstName : this.populate("#{names.firstName}")).toLowerCase();
		lastName = this.slugify(lastName ? lastName : this.populate("#{names.lastName}")).toLowerCase();

		return [
			`${firstName}.${lastName}@#{internet.emailDomain}`,
			`${firstName}.${lastName}##@#{internet.emailDomain}`,
			`${firstName}${lastName}##@#{internet.emailDomain}`,
			`${firstName}##@#{internet.emailDomain}`
		];
	},

	imageCategories: ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"],

	image(width = 640, height = 480, category) {
		let url ="http://lorempixel.com/" + width + "/" + height;
		if (category)
			url += "/" + category;

		return url;
	},

	mac() {
		let parts = [];
		for(let i = 0; i < 6; i++) {
			parts.push(this.random.number(15).toString(16) + this.random.number(15).toString(16));
		}
		return parts.join(":");
	},

	ip() {
		let parts = [];
		for(let i = 0; i < 4; i++) 
			parts.push(this.random.number(1, 254));

		return parts.join(".");
	},	

	color(baseRed255 = 0, baseGreen255 = 0, baseBlue255 = 0) {
		// based on awesome response : http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
		let red = Math.floor((this.random.number(256) + baseRed255) / 2);
		let green = Math.floor((this.random.number(256) + baseGreen255) / 2);
		let blue = Math.floor((this.random.number(256) + baseBlue255) / 2);
		let redStr = red.toString(16);
		let greenStr = green.toString(16);
		let blueStr = blue.toString(16);
		return /*'#' +*/ (redStr.length === 1 ? "0" : "") + redStr +
			(greenStr.length === 1 ? "0" : "") + greenStr +
			(blueStr.length === 1 ? "0": "") + blueStr;
	},

	gravatar(email) {
		if (email == null) {
			email = this.internet.email();
		}

		return "//www.gravatar.com/avatar/" + crypto.createHash('md5').update(email).digest("hex");
	}
};