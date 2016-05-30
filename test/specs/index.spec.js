import { expect } from "chai";

import Fakerator from "lib";

describe("Fakerator", () => {

	it("check class methods", () => {
		expect(Fakerator).to.be.exist;

		let fakerator = new Fakerator();

		expect(fakerator).to.be.exist;

		expect(fakerator.locale).to.be.an("Object");
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

	it("check 'default' locale", () => {

		let fakerator = new Fakerator();

		expect(fakerator).to.be.exist;
		expect(fakerator.locale).to.be.an("Object");
		expect(fakerator.locale._meta.id).to.be.equal("default");
		expect(fakerator.locale._meta.language).to.be.equal("English");
		expect(fakerator.locale._meta.country).to.be.equal("United Kingdom");

	});

	it("check loading locale", () => {

		let fakerator = new Fakerator("hu-HU");

		expect(fakerator).to.be.exist;
		expect(fakerator.locale).to.be.an("Object");
		expect(fakerator.locale._meta.id).to.be.equal("hu-HU");
		expect(fakerator.locale._meta.fallback).to.be.null;
		expect(fakerator.locale._meta.language).to.be.equal("Hungarian");
		expect(fakerator.locale._meta.country).to.be.equal("Hungary");
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.lorem).to.be.an("Object");
	});

	it("check fallback", () => {

		let fakerator = new Fakerator("xy");

		expect(fakerator).to.be.exist;
		expect(fakerator.locale).to.be.an("Object");
		expect(fakerator.locale._meta.id).to.be.equal("default");
		expect(fakerator.locale.names).to.be.an("Object");
		expect(fakerator.locale.lorem).to.be.an("Object");
	});	

});