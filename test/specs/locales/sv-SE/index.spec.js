import { expect } from "chai";

import Fakerator from "lib";

describe("Locale sv-SE", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("sv-SE");
		fakerator.seed(4100);		
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(10);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstNameM()).to.be.equal("Anders");
		expect(fakerator.names.firstNameF()).to.be.equal("Elisabet");
		expect(fakerator.names.lastName()).to.be.equal("Nilsson");
		expect(fakerator.names.nameM()).to.be.equal("Erik Gustafsson");
		expect(fakerator.names.nameF()).to.be.equal("Kristina Olsson");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Olsson HB");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("8638-09966");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Köfors");
		expect(fakerator.address.street()).to.be.equal("Gustafssons Gata 6");
		expect(fakerator.address.streetName()).to.be.equal("Pers Gata");
		expect(fakerator.address.buildingNumber()).to.be.equal("7");
		expect(fakerator.address.postCode()).to.be.equal("20229");

		expect(fakerator.address.country()).to.be.equal("Argentina");

		expect(fakerator.address.state()).to.be.equal("Jämtland");
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("emilnilsson09");
		expect(fakerator.internet.domain()).to.be.equal("kristina-johansson.biz");
		expect(fakerator.internet.email()).to.be.equal("karin.gustafsson@gmail.com");
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