import { expect } from "chai";

import Fakerator from "lib";

describe("Locale hu-HU", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("hu-HU");
		fakerator.seed(3636);		
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(100);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstNameM()).to.be.equal("Gábor");
		expect(fakerator.names.firstNameF()).to.be.equal("Gyöngyi");
		expect(fakerator.names.lastName()).to.be.equal("Budai");
		expect(fakerator.names.nameM()).to.be.equal("Török Roland Norbert");
		expect(fakerator.names.nameF()).to.be.equal("Farkas Etelka");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Orbán Zrt.");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("06-20-585-8023");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Pestszeg");
		expect(fakerator.address.cityPrefix()).to.be.equal("Pest");
		expect(fakerator.address.citySuffix()).to.be.equal("sziget");
		expect(fakerator.address.street()).to.be.equal("Fodor Edit út 439");
		expect(fakerator.address.streetName()).to.be.equal("Szabó Rita út");
		expect(fakerator.address.streetSuffix()).to.be.equal("körút");
		expect(fakerator.address.buildingNumber()).to.be.equal("8");
		expect(fakerator.address.postCode()).to.be.equal("6564");

		fakerator.random.string(5); // Placeholder to next random
		expect(fakerator.address.country()).to.be.equal("Görögország");

		expect(fakerator.address.state()).to.be.undefined;
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("budaimarcell02");
		expect(fakerator.internet.domain()).to.be.equal("bognrpter.hu");
		expect(fakerator.internet.emailDomain()).to.be.equal("freemail.hu");
		expect(fakerator.internet.email()).to.be.equal("baloghbel51@gmail.com");

		expect(fakerator.internet.userName("Jakab", "Gipsz")).to.be.equal("gipsz18");
		expect(fakerator.internet.email("Jakab", "Gipsz")).to.be.equal("gipszjakab56@freemail.hu");
	});

	it("check entity.user", () => {
		let user = fakerator.entity.user();
		expect(user).to.be.an("Object");
		//console.log(user);

		expect(user).to.have.property("firstName").an("String");
		expect(user).to.have.property("lastName").an("String");
		expect(user).to.have.property("userName").an("String");
		expect(user).to.have.property("password").an("String");
		expect(user).to.have.property("email").an("String");
		expect(user).to.have.property("phone").an("String");
		expect(user).to.have.property("dob").an("Date");
		expect(user).to.have.property("website").an("String");
		expect(user).to.have.property("ip").an("String");
		expect(user).to.have.property("avatar").an("String");
		expect(user).to.have.property("gravatar").an("String");
		expect(user).to.have.property("status").an("Boolean");
		expect(user).to.have.property("address").an("Object");

		expect(user.address).to.have.property("country").an("String");
		expect(user.address).to.have.property("countryCode").an("String").length(2);
		expect(user.address.state).to.be.undefined;
		expect(user.address).to.have.property("city").an("String");
		expect(user.address).to.have.property("street").an("String");
		expect(user.address).to.have.property("zip").an("String");
		expect(user.address).to.have.property("geo").an("Object");
		expect(user.address.geo).to.have.property("latitude").an("Number");
		expect(user.address.geo).to.have.property("longitude").an("Number");

	});	

});