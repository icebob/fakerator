import { expect } from "chai";

import Fakerator from "lib";

describe("Default phone", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check phone.number", () => {
		expect(fakerator.populate("#{phone.number}")).to.be.equal("1-196-214-3536 x5436");
		expect(fakerator.phone.number()).to.be.equal("(640) 552-0763");
	});

});