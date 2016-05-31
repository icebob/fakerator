import { expect } from "chai";

import Fakerator from "lib";

describe("Default lorem", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check lorem.word", () => {
		expect(fakerator.populate("#{lorem.word}")).to.be.equal("est");
		expect(fakerator.lorem.word()).to.be.equal("dolores");
	});

	it("check lorem.sentence", () => {
		expect(fakerator.populate("#{lorem.sentence}")).to.be.equal("Dolores recusandae laborum ut quia odio consequatur similique.");
		expect(fakerator.lorem.sentence()).to.be.equal("Libero similique quam voluptas soluta.");
	});

	it("check lorem.paragraph", () => {
		expect(fakerator.populate("#{lorem.paragraph}")).to.be.an("String");
		expect(fakerator.lorem.paragraph()).to.be.an("String");
	});

});