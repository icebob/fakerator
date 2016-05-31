import { expect } from "chai";

import Fakerator from "lib";

describe("Fakerator.seed", () => {

	let fakerator = new Fakerator();

	it("check seed function", () => {
		fakerator.seed(4278);
		expect(fakerator.random.number(100)).to.be.equal(50);

		fakerator.seed(98765);
		expect(fakerator.random.number(100)).to.be.equal(8);

		fakerator.seed(4278);
		expect(fakerator.random.number(100)).to.be.equal(50);
	});

	it("check seed with array", () => {
		fakerator.seed([42, 78]);
		expect(fakerator.random.number(100)).to.be.equal(92);
	});

});