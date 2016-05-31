import { expect } from "chai";

import Fakerator from "lib";

describe("Locale default", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
	});

	it("check locale definitions", () => {
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.phone).to.be.an("Object");
		expect(fakerator.locale.address).to.be.an("Object");
		expect(fakerator.locale.company).to.be.an("Object");
		expect(fakerator.locale.internet).to.be.an("Object");
		expect(fakerator.locale.lorem).to.be.an("Object");
		expect(fakerator.locale.date).to.be.an("Object");
	});
	
});