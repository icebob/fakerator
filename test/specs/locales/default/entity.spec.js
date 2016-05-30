import { expect } from "chai";

import Fakerator from "lib";

describe("Default entity", () => {

	describe("entity.user", () => {

		let fakerator;

		beforeEach( () => {
			fakerator = new Fakerator();
			fakerator.seed(8080);
		});

		it("check user", () => {
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

			//console.log(user);
		});

		it("check female user", () => {
			let user = fakerator.entity.user("F");
			expect(user).to.be.an("Object");
			expect(user.firstName).to.be.oneOf(fakerator.locale.names.firstNameF);
		});

		it("check male user", () => {
			let user = fakerator.entity.user("M");
			expect(user).to.be.an("Object");
			expect(user.firstName).to.be.oneOf(fakerator.locale.names.firstNameM);
		});

	});

	describe("entity.address", () => {

		let fakerator;

		beforeEach( () => {
			fakerator = new Fakerator();
			fakerator.seed(8080);
		});

		it("check address", () => {
			let address = fakerator.entity.address();
			expect(address).to.be.an("Object");

			expect(address).to.have.property("country").an("String");
			expect(address).to.have.property("countryCode").an("String").length(2);
			expect(address).to.have.property("state").an("String");
			expect(address).to.have.property("city").an("String");
			expect(address).to.have.property("street").an("String");
			expect(address).to.have.property("zip").an("String");
			expect(address).to.have.property("geo").an("Object");
			expect(address.geo).to.have.property("latitude").an("Number");
			expect(address.geo).to.have.property("longitude").an("Number");

			// console.log(address);
		});

		it("check address with defined country", () => {
			let address = fakerator.entity.address({ country: "France", countryCode: "FR" });
			expect(address.country).to.be.equal("France");
			expect(address.countryCode).to.be.equal("FR");
		});		

	});	

	describe("entity.company", () => {

		let fakerator;

		beforeEach( () => {
			fakerator = new Fakerator();
			fakerator.seed(8080);
		});

		it("check company", () => {
			let company = fakerator.entity.company();
			expect(company).to.be.an("Object");
			
			expect(company).to.have.property("name").an("String");
			expect(company).to.have.property("email").an("String");
			expect(company).to.have.property("phone").an("String");
			expect(company).to.have.property("website").an("String");
			expect(company).to.have.property("ip").an("String");
			expect(company).to.have.property("address").an("Object");
		});

	});

	describe("entity.post", () => {

		let fakerator;

		beforeEach( () => {
			fakerator = new Fakerator();
			fakerator.seed(8080);
		});

		it("check post", () => {
			let post = fakerator.entity.post();
			expect(post).to.be.an("Object");
			
			expect(post).to.have.property("title").an("String");
			expect(post).to.have.property("keywords").an("Array").length(3);
			expect(post).to.have.property("created").an("Date");
			expect(post).to.have.property("content").an("String");

			//console.log(post);
		});

	});	

});