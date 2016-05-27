module.exports = {
	tld: [
		"com",
		"info",
		"name",
		"net",
		"org",
		"de",
		"ch"
	],

	userName(firstName, lastName) {
		firstName = this.slugify(firstName ? firstName : this.populate("#{names.firstName}")).toLowerCase();
		lastName = this.slugify(lastName ? lastName : this.populate("#{names.lastName}")).toLowerCase();

		return this.populate(this.random.arrayElement([
			`${lastName}.${firstName}`,
			`${lastName}.${firstName}##`,
			`${lastName}.${firstName}####`,
			`${lastName}_${firstName}`,
			`${lastName}_${firstName}##`,
			`${lastName}${firstName}##`,
			`${lastName}##`
		]));
	},

	domain() {
		return this.slugify(this.populate(this.random.arrayElement([
			"#{names.lastName}",
			"#{names.lastName}#{names.firstName}",
			"#{names.lastName}-#{names.firstName}"
		]))).toLowerCase() + "." + this.random.arrayElement(module.exports.tld);
	},

	emailDomain: [
		"gmail.com",
		"yahoo.com",
		"hotmail.com"		
	],

	email(firstName, lastName, domain) {
		firstName = this.slugify(firstName ? firstName : this.populate("#{names.firstName}")).toLowerCase();
		lastName = this.slugify(lastName ? lastName : this.populate("#{names.lastName}")).toLowerCase();
		domain = domain ? domain : this.populate("#{internet.emailDomain}");

		return [
			`${lastName}.${firstName}@${domain}`,
			`${lastName}.${firstName}##@${domain}`,
			`${lastName}${firstName}##@${domain}`,
			`${lastName}##@${domain}`
		];
	}

};