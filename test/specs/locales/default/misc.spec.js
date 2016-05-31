import { expect } from "chai";

import Fakerator from "lib";

describe("Default misc", () => {

	let fakerator;

	beforeEach( () => {
		fakerator = new Fakerator();
		fakerator.seed(8080);
	});

	it("check misc.uuid", () => {
		expect(fakerator.populate("#{misc.uuid}")).to.be
			.an("String")
			.length(36)
			.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);

		expect(fakerator.misc.uuid()).to.be
			.an("String")
			.length(36)
			.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
	});

});