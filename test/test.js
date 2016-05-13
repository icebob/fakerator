var Fakerator = require("../lib");

var fakerator = new Fakerator("hu-HU");

/*console.log(fakerator);

for(var i = 0; i < 10; i++) {
	console.log(fakerator.random.number(1, 100));
}
console.log("----------------\r\n");
*/

for(var i = 0; i < 10; i++) {
	console.log(fakerator.get("#{names.name}"));
}
console.log("----------------\r\n");

for(var i = 0; i < 10; i++) {
	console.log(fakerator.get("#{company.name}"));
}
console.log("----------------\r\n");

for(var i = 0; i < 10; i++) {
	console.log(fakerator.get("#{phone.number}"));
}
console.log("----------------\r\n");

for(var i = 0; i < 10; i++) {
	console.log(fakerator.get("#{internet.avatar}"));
}
console.log("----------------\r\n");
