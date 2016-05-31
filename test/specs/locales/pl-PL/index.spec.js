import { expect } from "chai";

import Fakerator from "lib";

describe("Locale pl-PL", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("pl-PL");
		fakerator.seed(5050);
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(409);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstName()).to.be.equal("Cecylia");
		expect(fakerator.names.lastName()).to.be.equal("Popławski");
		expect(fakerator.names.name()).to.be.equal("Randolf Głąb");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Witczak LLC");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("968-634-492");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Aleksandrów Łódzki");
		expect(fakerator.address.street()).to.be.equal("al. Kozieł 9268");
		expect(fakerator.address.streetName()).to.be.equal("ul. Porębski");
		expect(fakerator.address.buildingNumber()).to.be.equal("064");
		expect(fakerator.address.postCode()).to.be.equal("69-912");
		expect(fakerator.address.state()).to.be.equal("Kujawsko-pomorskie");
		expect(fakerator.address.country()).to.be.equal("Brazylia");
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("cecylia.popawski4492");
		expect(fakerator.internet.domain()).to.be.equal("korneliuszdziuba.info");
		expect(fakerator.internet.emailDomain()).to.be.equal("hotmail.com");
		expect(fakerator.internet.email()).to.be.equal("emilia91@yahoo.com");
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