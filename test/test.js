var Fakerator = require("../lib");

var fakerator = new Fakerator("default");

/*console.log(fakerator);

for(var i = 0; i < 10; i++) {
	console.log(fakerator.random.number(1, 100));
}*/


for(var i = 0; i < 10; i++) {
	console.log(fakerator.get("#{names.name}"));
}
