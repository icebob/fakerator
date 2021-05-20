import { expect } from "chai";

import Fakerator from "lib";

describe("Locale pt-BR", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("pt-BR");
		fakerator.seed(5511);
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(89);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstName()).to.be.equal("Manuel");
		expect(fakerator.names.lastName()).to.be.equal("Toledo");
		expect(fakerator.names.name()).to.be.equal("Carla Reis");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Grupo Toledo");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("+55 64 38552065");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("New Tomásmouth");
		expect(fakerator.address.street()).to.be.equal("Alameda Maitê 1696 Apto 440");
		expect(fakerator.address.streetName()).to.be.equal("Alameda Laura");
		expect(fakerator.address.buildingNumber()).to.be.equal("026");
		expect(fakerator.address.postCode()).to.be.equal("72001-317");
		expect(fakerator.address.state()).to.be.equal("Piauí");
		expect(fakerator.address.country()).to.be.equal("Armênia");
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("manuel_toledo");
		expect(fakerator.internet.domain()).to.be.equal("adrianomolina.info");
		expect(fakerator.internet.emailDomain()).to.be.equal("gmail.com");
		expect(fakerator.internet.email()).to.be.equal("abgail.marin@yahoo.com");
	});

	it("check entity.user", () => {
		let user = fakerator.entity.user();
		expect(user).to.be.an("Object");

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