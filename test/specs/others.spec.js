import { expect } from "chai";

import Fakerator from "lib";

describe("Fakerator utils", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(4278);
	});

	it("check slugify function", () => {
		expect(fakerator.slugify("  This is a * very_complex-text!with   Extra character(s).  "))
			.to.be.equal("This-is-a--very_complex-textwith---Extra-characters.");
	});

	it("check replaceSymbols function", () => {
		expect(fakerator.replaceSymbols("ABC-###-XYZ"))
			.to.be.equal("ABC-445-XYZ");

		expect(fakerator.replaceSymbols("???-###-???"))
			.to.be.equal("arp-306-gxi");

	});

	it("check shuffle function", () => {
		let arr = [1,2,3,4,5,6,7,8,9];

		expect(fakerator.shuffle())
			.to.be.undefined;

		expect(fakerator.shuffle(arr))
			.to.be.deep.equal([ 6, 8, 3, 1, 2, 7, 4, 5, 9 ]);

	});
	
});