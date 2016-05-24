import { expect } from "chai";

import Fakerator from "lib/fakerator";

describe("Fakerator.populate", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(4278);
	});

	it("check populate", () => {
		expect(fakerator.populate("#{names.name}")).to.be.equal("Ross Hansen");
		expect(fakerator.populate("#{address.street}")).to.be.equal("0662 Ferry Drive");

		expect(fakerator.populate("#{names.firstName} #{names.lastName} #{names.lastName}")).to.be.equal("Victor Stoltenberg Denesik");
		expect(fakerator.populate("#{names.firstName}-###-???")).to.be.equal("Mandy-802-oqs");
	});


})