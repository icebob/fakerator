import { expect } from "chai";

import Fakerator from "lib";

describe("Default company", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check company.name", () => {
		expect(fakerator.populate("#{company.name}")).to.be.equal("Weber, Gleichner and Kertzmann Inc.");
		expect(fakerator.company.name()).to.be.equal("Orn-Johnson Inc.");
	});

	it("check company.suffix", () => {
		expect(fakerator.populate("#{company.suffix}")).to.be.equal("LLC");
		expect(fakerator.company.suffix()).to.be.equal("Ltd.");
	});

});