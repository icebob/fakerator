import { expect } from "chai";

import Fakerator from "lib";

describe("Default date", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check date.timezone", () => {
		expect(fakerator.populate("#{date.timezone}")).to.be.equal("Asia/Bangkok");
		expect(fakerator.date.timezone()).to.be.equal("America/Lima");
	});

	it("check date.past", () => {
		//expect(fakerator.populate("#{date.past}")).to.be.an("Date");
		expect(fakerator.date.past()).to.be.an("Date");
		expect(fakerator.date.past(10)).to.be.an("Date");
	});

	it("check date.future", () => {
		//expect(fakerator.populate("#{date.future}")).to.be.an("Date");
		expect(fakerator.date.future()).to.be.an("Date");
		expect(fakerator.date.future(10)).to.be.an("Date");
	});

	it("check date.between", () => {
		//expect(fakerator.populate("#{date.between}")).to.be.an("Date");
		expect(fakerator.date.between()).to.be.an("Date");
		expect(fakerator.date.between(new Date(), new Date())).to.be.an("Date");
	});

	it("check date.recent", () => {
		//expect(fakerator.populate("#{date.recent}")).to.be.an("Date");
		expect(fakerator.date.recent()).to.be.an("Date");
		expect(fakerator.date.recent(10)).to.be.an("Date");
	});

	it("check date.age", () => {
		expect(fakerator.populate("#{date.age}")).to.be.equal("63");
		expect(fakerator.date.age()).to.be.equal(26);
		expect(fakerator.date.age(6, 18)).to.be.equal(18);
	});

	it("check date.month", () => {
		expect(fakerator.populate("#{date.month}")).to.be.equal("September");
		expect(fakerator.date.month()).to.be.equal("February");
	});	

	it("check date.weekday", () => {
		expect(fakerator.populate("#{date.weekday}")).to.be.equal("Friday");
		expect(fakerator.date.weekday()).to.be.equal("Sunday");
	});	

	it("check date.weekdayShort", () => {
		expect(fakerator.populate("#{date.weekdayShort}")).to.be.equal("Fri");
		expect(fakerator.date.weekdayShort()).to.be.equal("Sun");
	});	

	it("check date.weekdayMin", () => {
		expect(fakerator.populate("#{date.weekdayMin}")).to.be.equal("Fr");
		expect(fakerator.date.weekdayMin()).to.be.equal("Su");
	});	

});