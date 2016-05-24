import { expect } from "chai";

import Fakerator from "lib/fakerator";

describe("Fakerator", () => {

	it("check class methods", () => {
		expect(Fakerator).to.be.exist;

		let fakerator = new Fakerator();

		expect(fakerator).to.be.exist;

		expect(fakerator.seed).to.be.an("Function");
		expect(fakerator.random.number).to.be.an("Function");
		expect(fakerator.random.boolean).to.be.an("Function");
		expect(fakerator.random.digit).to.be.an("Function");
		expect(fakerator.random.letter).to.be.an("Function");
		expect(fakerator.random.arrayElement).to.be.an("Function");
		expect(fakerator.random.objectElement).to.be.an("Function");
		expect(fakerator.random.masked).to.be.an("Function");
		expect(fakerator.slugify).to.be.an("Function");
		expect(fakerator.replaceSymbols).to.be.an("Function");
		expect(fakerator.shuffle).to.be.an("Function");
		expect(fakerator.times).to.be.an("Function");
		expect(fakerator.populate).to.be.an("Function");
	});

	// TODO: check locale, fallback

})