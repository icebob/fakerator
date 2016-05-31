import { expect } from "chai";

import Fakerator from "lib";

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
		expect(fakerator.populate("#{internet.url}")).to.be.equal("http://juanita-kertzmann.org");
		expect(fakerator.internet.url()).to.be.equal("http://ella-parisian.com");
		expect(fakerator.internet.url(true, true)).to.be.equal("https://www.arthurmacgyver.net");
	});

	it("check internet.emailDomain", () => {
		expect(fakerator.populate("#{internet.emailDomain}")).to.be.equal("hotmail.com");
		expect(fakerator.internet.emailDomain()).to.be.equal("gmail.com");
	});

	it("check internet.email", () => {
		expect(fakerator.populate("#{internet.email}")).to.be.equal("kelly.moore@gmail.com");
		expect(fakerator.internet.email()).to.be.equal("vernonheidenreich43@hotmail.com");
	});

	it("check internet.email with name parameters", () => {
		expect(fakerator.populate("#{internet.email}", "John", "Doe")).to.be.equal("john.doe@hotmail.com");
		expect(fakerator.internet.email("Jane", "Doe")).to.be.equal("janedoe21@hotmail.com");
		expect(fakerator.internet.email(null, null, "company.org")).to.be.equal("vernonheidenreich54@company.org");
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

	it("check internet.gravatar", () => {
		expect(fakerator.populate("#{internet.gravatar}")).to.be.equal("https://www.gravatar.com/avatar/a91004b566f80271f0a3577f71d43cd4");
		expect(fakerator.internet.gravatar()).to.be.equal("https://www.gravatar.com/avatar/06ba08b465e85247620b410fbb26dacf");
		expect(fakerator.internet.gravatar("john.doe@gmail.com")).to.be.equal("https://www.gravatar.com/avatar/e13743a7f1db7f4246badd6fd6ff54ff");
	});

	it("check internet.ipv6", () => {
		expect(fakerator.populate("#{internet.ipv6}")).to.be.equal("b2e9:4275:95a9:65a1:a618:940b:a6ce:adb6");
		expect(fakerator.internet.ipv6()).to.be.equal("8807:58c0:6a36:4afe:b1ce:2347:2438:78be");
	});

});