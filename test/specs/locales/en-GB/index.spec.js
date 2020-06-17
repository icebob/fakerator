
import { expect } from "chai";

import Fakerator from "lib";

describe("Locale en-GB", () => {

    let fakerator;

    beforeEach( () => {
        fakerator = new Fakerator("en-GB");
        fakerator.seed(5050);
    });


    it("check locale definitions", () => {
        expect(fakerator.locale.names).to.be.an("Object");
        expect(fakerator.locale.names.firstNameM).to.be.length(500);

        expect(fakerator.locale.phone).to.be.an("Object");
        expect(fakerator.locale.address).to.be.an("Object");
        expect(fakerator.locale.company).to.be.an("Object");
        expect(fakerator.locale.internet).to.be.an("Object");
    });

    it("check names definitions", () => {
        expect(fakerator.names.firstName()).to.be.equal("Gerard");
        expect(fakerator.names.lastName()).to.be.equal("Pagac");
        expect(fakerator.names.name()).to.be.equal("Ron Walker");
    });

    it("check company definitions", () => {
        expect(fakerator.company.name()).to.be.equal("Tremblay LLC");
    });

    it("check phone definitions", () => {
        expect(fakerator.phone.number()).to.be.equal("+44 686 344926");
    });

    it("check address definitions", () => {
        expect(fakerator.address.city()).to.be.equal("Bedford");
        expect(fakerator.address.street()).to.be.equal("6 Ron Court");
        expect(fakerator.address.streetName()).to.be.equal("Rosemarie Way");
        expect(fakerator.address.buildingNumber()).to.be.equal("166");
        expect(fakerator.address.postCode()).to.be.equal("pz64 0yd");
        expect(fakerator.address.state()).to.be.equal("Lancashire");
        expect(fakerator.address.country()).to.be.equal("Bangladesh");
    });

    it("check internet definitions", () => {
        expect(fakerator.internet.userName()).to.be.equal("gerard.pagac4492");
        expect(fakerator.internet.domain()).to.be.equal("mildredcummings.info");
        expect(fakerator.internet.emailDomain()).to.be.equal("hotmail.com");
        expect(fakerator.internet.email()).to.be.equal("kerry91@yahoo.com");
    });

    it("check entity.user", () => {
        let user = fakerator.entity.user();
        expect(user).to.be.an("Object");
        //console.log(user);

        expect(user).to.have.property("firstName").an("String");
        expect(user).to.have.property("lastName").an("String");
        expect(user).to.have.property("userName").an("String");
        expect(user).to.have.property("password").an("String");
        expect(user).to.have.property("email").an("String");
        expect(user).to.have.property("phone").an("String");
        expect(user).to.have.property("dob").an("Date");
        expect(user).to.have.property("website").an("String");
        expect(user).to.have.property("ip").an("String");
        expect(user).to.have.property("avatar").an("String");
        expect(user).to.have.property("gravatar").an("String");
        expect(user).to.have.property("status").an("Boolean");
        expect(user).to.have.property("address").an("Object");

        expect(user.address).to.have.property("country").an("String");
        expect(user.address).to.have.property("countryCode").an("String").length(2);
        expect(user.address).to.have.property("state").an("String");
        expect(user.address).to.have.property("city").an("String");
        expect(user.address).to.have.property("street").an("String");
        expect(user.address).to.have.property("zip").an("String");

    });

});
