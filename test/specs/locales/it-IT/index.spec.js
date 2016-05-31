import { expect } from "chai";

import Fakerator from "lib";

describe("Locale it-IT", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("it-IT");
		fakerator.seed(4545);
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(362);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstName()).to.be.equal("Nicoletta");
		expect(fakerator.names.lastName()).to.be.equal("Rossetti");
		expect(fakerator.names.name()).to.be.equal("Emanuel D\'angelo");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Mazza s.r.l.");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("+96 84 3042993");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Settimo Luna calabro");
		expect(fakerator.address.cityPrefix()).to.be.equal("Borgo");
		expect(fakerator.address.citySuffix()).to.be.equal("lido");
		expect(fakerator.address.street()).to.be.equal("Unions Antimo 6, Appartamento 64");
		expect(fakerator.address.streetName()).to.be.equal("Springs Riva");
		expect(fakerator.address.buildingNumber()).to.be.equal("313");
		expect(fakerator.address.postCode()).to.be.equal("91343");
		expect(fakerator.address.state()).to.be.equal("Lucca");
		expect(fakerator.address.country()).to.be.equal("Mauritius");
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("nicoletta_rossetti");
		expect(fakerator.internet.domain()).to.be.equal("giobbe.net");
		expect(fakerator.internet.emailDomain()).to.be.equal("yahoo.it");
		expect(fakerator.internet.email()).to.be.equal("antimo.milani97@email.it");
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