import { expect } from "chai";

import Fakerator from "lib";

describe("Fakerator.random", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(4278);
	});

	it("check random.number function", () => {
		expect(fakerator.random.number(100)).to.be.equal(50).a("Number");
		expect(fakerator.random.number(80, 100, 80)).to.be.equal(80);
		expect(fakerator.random.number(100, 1)).to.be.equal(57);
		expect(fakerator.random.number(1, 100, 0.1)).to.be.closeTo(33.4, 0.1);
	});

	it("check random.boolean function", () => {
		expect(fakerator.random.boolean()).to.be.a("Boolean");
		expect(fakerator.random.boolean()).to.be.equal(true);
		expect(fakerator.random.boolean()).to.be.equal(false);
	});

	it("check random.boolean with likelihood function", () => {
		let res = fakerator.times(fakerator.random.boolean, 10, 60);
		expect(res).to.include(true).include(false);

		expect(fakerator.times(fakerator.random.boolean, 10, 0)).to.not.include(true);
		expect(fakerator.times(fakerator.random.boolean, 10, 100)).to.not.include(false);
	});

	it("check random.digit function", () => {
		expect(fakerator.random.digit()).to.be.a("Number");
		expect(fakerator.random.digit()).to.be.equal(4);
		expect(fakerator.random.digit()).to.be.equal(5);
	});

	it("check random.letter function", () => {
		expect(fakerator.random.letter()).to.be.a("String");
		expect(fakerator.random.letter()).to.be.equal("l");
		expect(fakerator.random.letter()).to.be.equal("o");
	});

	it("check random.arrayElement function", () => {
		let array = [ "apple", "peach", "banana", "lemon", "orange" ];
		expect(fakerator.random.arrayElement(array)).to.be.a("String");
		expect(fakerator.random.arrayElement(array)).to.be.equal("banana");
		expect(fakerator.random.arrayElement(array)).to.be.equal("banana");
		expect(fakerator.random.arrayElement(array)).to.be.equal("peach");
		expect(fakerator.random.arrayElement()).to.be.undefined;
	});	

	it("check random.objectElement function", () => {
		let obj = {
			a: 1,
			b: 2,
			c: 3,
			d: 4
		};
		expect(fakerator.random.objectElement(obj)).to.be.an("Object");
		expect(fakerator.random.objectElement(obj)).to.be.deep.equal({ b: 2 });
		expect(fakerator.random.objectElement(obj)).to.be.deep.equal({ c: 3 });
		expect(fakerator.random.objectElement()).to.be.undefined;
	});

	it("check random.masked function", () => {
		expect(fakerator.random.masked("aA9*")).to.be.a("String");
		expect(fakerator.random.masked("aaa-AAA_999:***+***")).to.be.equal("aqa-RPG_932:606+vv1");
		expect(fakerator.random.masked("")).to.be.equal("");
		expect(fakerator.random.masked()).to.be.undefined;
	});

	it("check random.hex function", () => {
		expect(fakerator.random.hex()).to.be.a.equal("7");
		expect(fakerator.random.hex(8)).to.be.equal("7950a0b9");
	});	

	it("check random.string function", () => {
		expect(fakerator.random.string()).to.be.a("String").length(7);
		expect(fakerator.random.string(10)).to.be.length(10);
		expect(fakerator.random.string({ min: 5, max: 10 })).to.be.length(5);
	});

});