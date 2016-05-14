var Fakerator = require("./fakerator");

var fakerator = new Fakerator();
//fakerator.seed(123);

console.log("----------------\r\n");

//console.log(fakerator);
/*
for(var i = 0; i < 10; i++) {
	console.log(fakerator.random.number(10, 1, 2));
}
console.log("----------------\r\n");

*/

for(var i = 0; i < 10; i++) {
	var name = fakerator.names.name();
	console.log(name);
	//console.log(fakerator.slugify(name));
}
console.log("----------------\r\n");

for(var i = 0; i < 10; i++) {
	console.log(fakerator.company.name());
}
console.log("----------------\r\n");
/*
for(var i = 0; i < 10; i++) {
	console.log(fakerator.phone.number());
}
console.log("----------------\r\n");
*/
/*
for(var i = 0; i < 10; i++) {
	console.log({
		country: fakerator.address.country(),
		countryCode: fakerator.address.countryCode(),
		state: fakerator.address.state(),
		stateAbbr: fakerator.address.stateAbbr(),
		city: fakerator.address.city(),
		address: fakerator.address.street(),
		zip: fakerator.address.postCode(),
		geoLocation: fakerator.address.geoLocation()
	});
}
console.log("----------------\r\n");
*/
/*
for(var i = 0; i < 10; i++) {
	console.log(fakerator.internet.email("Bob", "Ice"));
}
console.log("----------------\r\n");
*/
/*
for(var i = 0; i < 10; i++) {
	console.log(fakerator.lorem.paragraph());
}*/
/*
for(var i = 0; i < 10; i++) {
	console.log(fakerator.address.geoLocation());
}
console.log("----------------\r\n");
*/

/*
var a = {
	a: 1,
	b: 2, 
	c: 3
}

for(var i = 0; i < 10; i++) {
	console.log(fakerator.random.objectElement(a));
}
console.log("----------------\r\n");
*/
/*
for(var i = 0; i < 10; i++) {
	console.log(fakerator.random.letter());
}
console.log("----------------\r\n");

for(var i = 0; i < 10; i++) {
	console.log(fakerator.random.digit());
}
console.log("----------------\r\n");
*/


for(var i = 0; i < 10; i++) {
	console.log(fakerator.date.past().toLocaleString());
}
console.log("----------------\r\n");


for(var i = 0; i < 10; i++) {
	console.log(fakerator.date.future().toLocaleString());
}
console.log("----------------\r\n");

for(var i = 0; i < 10; i++) {
	console.log(fakerator.date.recent(7).toLocaleString());
}
console.log("----------------\r\n");


/*

setInterval( function() {
	console.log(fakerator.random.number(10, 1));

}, 500);*/