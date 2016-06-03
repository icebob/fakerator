import { expect } from "chai";

import Fakerator from "lib";

describe("Locale en-AU", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("en-AU");
		fakerator.seed(6161);
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(200);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstName()).to.be.equal("Hannah");
		expect(fakerator.names.lastName()).to.be.equal("Heathcote");
		expect(fakerator.names.name()).to.be.equal("Finn Collins");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Mills Group");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("05 7545 3131");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("New Jessicabury");
		expect(fakerator.address.street()).to.be.equal("131 Greenholt Inlet Apt. 884");
		expect(fakerator.address.streetName()).to.be.equal("Borer Neck");
		expect(fakerator.address.buildingNumber()).to.be.equal("96");
		expect(fakerator.address.postCode()).to.be.equal("4143");
		expect(fakerator.address.state()).to.be.equal("South Australia");
		expect(fakerator.address.country()).to.be.equal("Zimbabwe");
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("hannah.heathcote5313");
		expect(fakerator.internet.domain()).to.be.equal("hayley.biz");
		expect(fakerator.internet.emailDomain()).to.be.equal("yahoo.com");
		expect(fakerator.internet.email()).to.be.equal("heidi.hickle59@gmail.com");
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
		expect(user.address).to.have.property("state").an("String");
		expect(user.address).to.have.property("city").an("String");
		expect(user.address).to.have.property("street").an("String");
		expect(user.address).to.have.property("zip").an("String");
		expect(user.address).to.have.property("geo").an("Object");
		expect(user.address.geo).to.have.property("latitude").an("Number");
		expect(user.address.geo).to.have.property("longitude").an("Number");

	});	

});