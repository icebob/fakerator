import { expect } from "chai";

import Fakerator from "lib";

describe("Locale en-CA", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator("en-CA");
		fakerator.seed(1111);
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
	});

	it("check address definitions", () => {
		expect(fakerator.address.postCode()).to.be.equal("i4g 9i2");
		expect(fakerator.address.state()).to.be.equal("Prince Edward Island");
	});

	it("check internet definitions", () => {
		expect(fakerator.internet.domain()).to.be.equal("rolando.net");
	});

});