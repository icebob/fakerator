import { expect } from "chai";

import Fakerator from "lib/fakerator";

describe("Locale hu-HU", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("hu-HU");
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
		expect(fakerator.names.firstNameM()).to.be.equal("Zalán");
		expect(fakerator.names.firstNameF()).to.be.equal("Györgyi");
		expect(fakerator.names.lastName()).to.be.equal("Soós");
		expect(fakerator.names.nameM()).to.be.equal("Veres Milán Sándor");
		expect(fakerator.names.nameF()).to.be.equal("Fülöp Zita");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("Szücs Kft.");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("06-70-269-8707");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Feketeújváros");
		expect(fakerator.address.cityPrefix()).to.be.equal("Balaton");
		expect(fakerator.address.citySuffix()).to.be.equal("némedi");
		expect(fakerator.address.street()).to.be.equal("Somogyi Aranka udvar 963. 2. emelet 4. ajtó");
		expect(fakerator.address.streetName()).to.be.equal("Nagy Kristóf dűlő");
		expect(fakerator.address.streetSuffix()).to.be.equal("út");
		expect(fakerator.address.buildingNumber()).to.be.equal("5");
		expect(fakerator.address.postCode()).to.be.equal("0086");

		//expect(fakerator.address.state()).to.be.undefined;
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.userName()).to.be.equal("bernadett_olh");
		expect(fakerator.internet.domain()).to.be.equal("jzmin-somogyi.biz");
		expect(fakerator.internet.emailDomain()).to.be.equal("gmail.com");
		expect(fakerator.internet.email()).to.be.equal("rita19@gmail.com");
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
			//expect(user.address).to.have.not.property("state");
			expect(user.address).to.have.property("city").an("String");
			expect(user.address).to.have.property("street").an("String");
			expect(user.address).to.have.property("zip").an("String");
			expect(user.address).to.have.property("geo").an("Object");
			expect(user.address.geo).to.have.property("latitude").an("Number");
			expect(user.address.geo).to.have.property("longitude").an("Number");

		});	

})