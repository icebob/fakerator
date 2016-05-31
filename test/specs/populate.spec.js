import { expect } from "chai";

import Fakerator from "lib";

describe("Fakerator.populate", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(4278);
	});

	it("check populate", () => {
		expect(fakerator.populate("#{names.name}")).to.be.equal("Ross Hansen");
		expect(fakerator.populate("#{address.street}")).to.be.equal("0662 Ferry Drive");

		expect(fakerator.populate("#{names.firstName} #{names.lastName} #{names.lastName}")).to.be.equal("Victor Stoltenberg Denesik");
		expect(fakerator.populate("#{names.firstName}-###-???")).to.be.equal("Mandy-802-oqs");
	});

	it("check with sentence", () =>{
		expect(fakerator.populate("Hi, my name is #{names.name}. I was born in #{address.city}, #{address.country}. I am #{date.age} years old."))
			.to.be.equal("Hi, my name is Ross Hansen. I was born in New Roderickstad, Denmark. I am 75 years old.");

	});

	it("check populate with missing def", () => {
		expect(fakerator.populate("#{abcd.xyz}")).to.be.equal("4{abcd.xyz}");
	});

});