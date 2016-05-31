import { expect } from "chai";

import Fakerator from "lib";

describe("Locale ru-RU", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("ru-RU");
		fakerator.seed(9009);		
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.names.firstNameM).to.be.length(52);

		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check names definitions", () => {
		expect(fakerator.names.firstNameM()).to.be.equal("Фёдор");
		expect(fakerator.names.firstNameF()).to.be.equal("Надежда");
		expect(fakerator.names.middleNameM()).to.be.equal("Андреевич");
		expect(fakerator.names.middleNameF()).to.be.equal("Борисовна");
		expect(fakerator.names.lastNameM()).to.be.equal("Фадеев");
		expect(fakerator.names.lastNameF()).to.be.equal("Овчинникова");
		expect(fakerator.names.nameM()).to.be.equal("Волков Альберт Владиславович");
		expect(fakerator.names.nameF()).to.be.equal("Герман Николаевна Логинова");
	});

	it("check company definitions", () => {
		expect(fakerator.company.name()).to.be.equal("ТСЖ НовосибирскСнабТрейдПром");
	});

	it("check phone definitions", () => {
		expect(fakerator.phone.number()).to.be.equal("(970)175-80-03");
	});

	it("check address definitions", () => {
		expect(fakerator.address.city()).to.be.equal("Тверь");
		expect(fakerator.address.street()).to.be.equal("улица Клубная, 800");
		expect(fakerator.address.streetName()).to.be.equal("площадь Красноармейская");
		expect(fakerator.address.streetSuffix()).to.be.equal("площадь");
		expect(fakerator.address.buildingNumber()).to.be.equal("683");
		expect(fakerator.address.postCode()).to.be.equal("017769");

		expect(fakerator.address.state()).to.be.equal("Таймырский (Долгано-Ненецкий) автономный округ");
		expect(fakerator.address.country()).to.be.equal("Аруба");
	});

	it("check internet definitions", () => {
		// TODO fix slugify
		expect(fakerator.internet.userName()).to.be.equal("58");
		expect(fakerator.internet.domain()).to.be.equal(".eu");
		expect(fakerator.internet.emailDomain()).to.be.equal("mail.ru");
		expect(fakerator.internet.email()).to.be.equal(".@mail.ru");
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