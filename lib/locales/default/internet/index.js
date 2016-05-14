module.exports = {
	avatar: require("./avatar"),

	domainSuffix: require("./domainSuffix"),

	emailDomain: [
		"gmail.com",
		"yahoo.com",
		"hotmail.com"		
	],

	email: (firstName, lastName) => {
		firstName = firstName ? firstName.toLowerCase() : "#{names.firstName}";
		lastName = lastName ? lastName.toLowerCase() : "#{names.lastName}";

		return [
			`${firstName}.${lastName}@#{internet.emailDomain}`,
			`${firstName}.${lastName}##@#{internet.emailDomain}`,
			`${firstName}${lastName}##@#{internet.emailDomain}`,
			`${firstName}##@#{internet.emailDomain}`
		]
	}
}