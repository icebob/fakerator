import { expect } from "chai";

import Fakerator from "lib";

describe("Locale fr-FR", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("fr-FR");
		fakerator.seed(5050);
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
		expect(fakerator.names.firstName()).to.be.equal("Lilou");
		expect(fakerator.names.lastName()).to.be.equal("Rodriguez");
		expect(fakerator.names.name()).to.be.equal("Victor Roussel");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Royer SCOP");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("0168634492");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Paris");
		expect(fakerator.address.cityPrefix()).to.be.equal("New");
		expect(fakerator.address.citySuffix()).to.be.equal("side");
		expect(fakerator.address.street()).to.be.equal("449 Passage Saint-Jacques");
		expect(fakerator.address.streetName()).to.be.equal("Avenue Charlemagne");
		expect(fakerator.address.buildingNumber()).to.be.equal("60");
		expect(fakerator.address.postCode()).to.be.equal("40699");
		expect(fakerator.address.state()).to.be.equal("Auvergne");
		expect(fakerator.address.country()).to.be.equal("El Salvador");
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("lilou.rodriguez4492");
		expect(fakerator.internet.domain()).to.be.equal("clmentdupont.info");
		expect(fakerator.internet.emailDomain()).to.be.equal("hotmail.fr");
		expect(fakerator.internet.email()).to.be.equal("lisa91@yahoo.fr");
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