import { expect } from "chai";

import Fakerator from "lib/fakerator";

describe("Fakerator.times", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(4278);
	});

	it("check times function with names", () => {
		let res = fakerator.times(fakerator.names.name, 3);
		expect(res).to.be.an("Array");
		expect(res).to.be.length(3);
		expect(res).to.be.deep.equal([ "Ross Hansen", "Thomas Pfeffer", "Alexis Hauck I" ]);
	});

	it("check times function with random.number", () => {
		let res = fakerator.times(fakerator.random.number, 10, 50, 1);
		expect(res).to.be.an("Array");
		expect(res).to.be.length(10);
		expect(res).to.be.deep.equal( [25, 24, 29, 17, 2, 33, 1, 35, 31, 13] );
	});

})