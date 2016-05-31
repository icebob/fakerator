import { expect } from "chai";

import Fakerator from "lib";

describe("Default names", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check names.name", () => {
		expect(fakerator.populate("#{names.name}")).to.be.equal("Dr. Sheryl Gleichner");
		expect(fakerator.names.name()).to.be.equal("Vernon Mante");
	});

	it("check names.firstNameM", () => {
		expect(fakerator.populate("#{names.firstNameM}")).to.be.equal("Marco");
		expect(fakerator.names.firstNameM()).to.be.equal("Bruce");
	});

	it("check names.firstNameF", () => {
		expect(fakerator.populate("#{names.firstNameF}")).to.be.equal("Juana");
		expect(fakerator.names.firstNameF()).to.be.equal("Kelly");
	});

	it("check names.lastNameM", () => {
		expect(fakerator.populate("#{names.lastNameM}")).to.be.equal("Reilly");
		expect(fakerator.names.lastNameM()).to.be.equal("Collier");
	});

	it("check names.lastNameF", () => {
		expect(fakerator.populate("#{names.lastNameF}")).to.be.equal("Reilly");
		expect(fakerator.names.lastNameF()).to.be.equal("Collier");
	});

	it("check names.lastName", () => {
		expect(fakerator.populate("#{names.lastName}")).to.be.equal("Collier");
		expect(fakerator.names.lastName()).to.be.equal("Moore");
	});

	it("check names.prefix", () => {
		expect(fakerator.populate("#{names.prefix}")).to.be.equal("Miss");
		expect(fakerator.names.prefix()).to.be.equal("Mr.");
	});

	it("check names.suffix", () => {
		expect(fakerator.populate("#{names.suffix}")).to.be.equal("MD");
		expect(fakerator.names.suffix()).to.be.equal("Sr.");
	});

	it("check names.nameM", () => {
		expect(fakerator.populate("#{names.nameM}")).to.be.equal("Bruce Weber");
		expect(fakerator.names.nameM()).to.be.equal("Don Daniel");
	});

	it("check names.nameF", () => {
		expect(fakerator.populate("#{names.nameF}")).to.be.equal("Kelly Weber");
		expect(fakerator.names.nameF()).to.be.equal("Juanita Daniel");
	});

});