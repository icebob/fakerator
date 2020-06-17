module.exports = {

	address(def = {}) {
		let country = this.address.countryAndCode();
		return {
			country: def.country || country.name,				
			countryCode: def.countryCode || country.code,
			state: def.state || this.address.state(),				
			city: def.city || this.address.city(),
			street: def.street || this.address.street(),
			zip: def.zip || this.address.postCode(),
			geo: def.geo || this.address.geoLocation()
		};
	},

	user(gender) {

		let firstName = this.populate("#{names.firstName" + (gender ? gender.toUpperCase() : "") + "}");
		let lastName = this.populate("#{names.lastName" + (gender ? gender.toUpperCase() : "") + "}");

		return {
			firstName: firstName,
			lastName: lastName,
			userName: this.internet.userName(firstName, lastName),
			password: this.internet.password(),
			email: this.internet.email(firstName, lastName),
			phone: this.phone.number(),
			dob: this.date.past(80),
			website: this.internet.url(),
			ip: this.internet.ip(),
			avatar: this.internet.avatar(),
			gravatar: this.internet.gravatar(),
			address: this.entity.address(),
			status: this.random.boolean()
		};

	}, 

	company(name) {
		name = name || this.company.name();

		return {
			name: name,
			email: this.internet.email(name),
			phone: this.phone.number(),
			website: this.internet.url(),
			ip: this.internet.ip(),
			address: this.entity.address()
		};

	},	

	post(paragraphs = 3) {
		return {
			title: this.lorem.sentence(),
			keywords: this.utimes(this.lorem.word, 3),
			created: this.date.recent(7),
			content: this.times(this.lorem.paragraph, paragraphs).join("\r\n")
		};
	}
};