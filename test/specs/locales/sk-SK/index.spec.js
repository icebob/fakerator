import { expect } from "chai";

import Fakerator from "lib";

describe("Locale sk-SK", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("sk-SK");
		fakerator.seed(4242);		
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(192);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstNameM()).to.be.equal("Rudolf");
		expect(fakerator.names.firstNameF()).to.be.equal("Kvetoslava");
		expect(fakerator.names.lastNameM()).to.be.equal("Ďaďo");
		expect(fakerator.names.lastNameF()).to.be.equal("Halušková");
		expect(fakerator.names.nameM()).to.be.equal("Medard Hossa");
		expect(fakerator.names.nameF()).to.be.equal("Terézia Dvončová");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Ďuricová s.r.o.");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("089 2942 3716");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Košice IV");
		expect(fakerator.address.street()).to.be.equal("Vihorlatská 9");
		expect(fakerator.address.streetName()).to.be.equal("Matejkova");
		expect(fakerator.address.buildingNumber()).to.be.equal("3");
		expect(fakerator.address.postCode()).to.be.equal("16 855");

		expect(fakerator.address.country()).to.be.equal("Chorvátsko");

		expect(fakerator.address.state()).to.be.undefined;
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("kristin42");
		expect(fakerator.internet.domain()).to.be.equal("etelaturokov.biz");
		expect(fakerator.internet.emailDomain()).to.be.equal("zoznam.sk");
		expect(fakerator.internet.email()).to.be.equal("bartolomej50@zoznam.sk");

		expect(fakerator.internet.userName("Jakab", "Gipsz")).to.be.equal("jakab.gipsz");
		expect(fakerator.internet.email("Jakab", "Gipsz")).to.be.equal("jakab.gipsz61@zoznam.sk");
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