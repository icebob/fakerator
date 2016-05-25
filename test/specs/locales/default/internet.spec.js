import { expect } from "chai";

import Fakerator from "lib/fakerator";

describe("Default internet", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check internet.avatar", () => {
		expect(fakerator.populate("#{internet.avatar}")).to.be.equal("https://s3.amazonaws.com/uifaces/faces/twitter/snowwrite/128.jpg");
		expect(fakerator.internet.avatar()).to.be.equal("https://s3.amazonaws.com/uifaces/faces/twitter/charliecwaite/128.jpg");
	});

	it("check internet.tld", () => {
		expect(fakerator.populate("#{internet.tld}")).to.be.equal("eu");
		expect(fakerator.internet.tld()).to.be.equal("com");
	});

	it("check internet.userName", () => {
		expect(fakerator.populate("#{internet.userName}")).to.be.equal("kelly.moore14");
		expect(fakerator.internet.userName()).to.be.equal("marshall_orn");
	});

	it("check internet.userName with name parameters", () => {
		expect(fakerator.populate("#{internet.userName}", "John", "Doe")).to.be.equal("johndoe19");
		expect(fakerator.internet.userName("Jane", "Doe")).to.be.equal("jane_doe21");
	});

	it("check password", () => {
		expect(fakerator.populate("#{internet.password}")).to.be.an("String");
		expect(fakerator.internet.password()).to.be.an("String");
		expect(fakerator.internet.password(12)).to.be.length(12);
	});

	it("check internet.domain", () => {
		expect(fakerator.populate("#{internet.domain}")).to.be.equal("merle-gleichner.net");
		expect(fakerator.internet.domain()).to.be.equal("marshallorn.biz");
	});

	it("check internet.url", () => {
		expect(fakerator.populate("#{internet.url}")).to.be.equal("https://www.juanita-kertzmann.org");
		expect(fakerator.internet.url()).to.be.equal("https://www.ella-parisian.com");
		expect(fakerator.internet.url(false, false)).to.be.equal("http://arthurmacgyver.net");
	});

	it("check internet.emailDomain", () => {
		expect(fakerator.populate("#{internet.emailDomain}")).to.be.equal("hotmail.com");
		expect(fakerator.internet.emailDomain()).to.be.equal("gmail.com");
	});

	it("check internet.email", () => {
		expect(fakerator.populate("#{internet.email}")).to.be.equal("kelly.moore43@gmail.com");
		expect(fakerator.internet.email()).to.be.equal("annette.mante60@gmail.com");
	});

	it("check internet.email with name parameters", () => {
		expect(fakerator.populate("#{internet.email}", "John", "Doe")).to.be.equal("johndoe96@gmail.com");
		expect(fakerator.internet.email("Jane", "Doe")).to.be.equal("jane.doe43@gmail.com");
	});

	it("check internet.imageCategories", () => {
		expect(fakerator.populate("#{internet.imageCategories}")).to.be.equal("nature");
		expect(fakerator.internet.imageCategories()).to.be.equal("animals");
	});

	it("check internet.image", () => {
		expect(fakerator.populate("#{internet.image}")).to.be.equal("http://lorempixel.com/640/480");
		expect(fakerator.internet.image(1920, 1080, "animals")).to.be.equal("http://lorempixel.com/1920/1080/animals");
	});

	it("check internet.mac", () => {
		expect(fakerator.populate("#{internet.mac}")).to.be.equal("b2:e9:42:75:95:a9");
		expect(fakerator.internet.mac()).to.be.equal("65:a1:a6:18:94:0b");
	});

	it("check internet.ip", () => {
		expect(fakerator.populate("#{internet.ip}")).to.be.equal("185.34.238.156");
		expect(fakerator.internet.ip()).to.be.equal("69.45.112.94");
	});

	it("check internet.color", () => {
		expect(fakerator.populate("#{internet.color}")).to.be.equal("5d1178");
		expect(fakerator.internet.color()).to.be.equal("4e2216");
		expect(fakerator.internet.color(255, 128)).to.be.equal("b76f49");
	});
})