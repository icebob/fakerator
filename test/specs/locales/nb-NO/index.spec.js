import { expect } from "chai";

import Fakerator from "lib";

describe("Locale nb-NO", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("nb-NO");
		fakerator.seed(4100);		
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(50);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstNameM()).to.be.equal("Sebastian");
		expect(fakerator.names.firstNameF()).to.be.equal("Sunniva");
		expect(fakerator.names.lastName()).to.be.equal("Holm");
		expect(fakerator.names.nameM()).to.be.equal("Markus Edvardsen");
		expect(fakerator.names.nameF()).to.be.equal("Aurora Aasen");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Fredriksen ASA");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("86 38 09 96");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Utsjøen");
		expect(fakerator.address.street()).to.be.equal("Vestre Eikeåsen");
		expect(fakerator.address.streetName()).to.be.equal("Sjø");
		expect(fakerator.address.buildingNumber()).to.be.equal("65");
		expect(fakerator.address.postCode()).to.be.equal("4577");

		expect(fakerator.address.country()).to.be.equal("Tyrkia");

		expect(fakerator.address.state()).to.be.undefined;
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("andersholm09");
		expect(fakerator.internet.domain()).to.be.equal("elise-olsen.biz");
		expect(fakerator.internet.email()).to.be.equal("maren.nygrd@gmail.com");
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