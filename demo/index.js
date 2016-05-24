var Fakerator = require("../dist/fakerator");

var fakerator = new Fakerator();
//fakerator.seed(123);

console.log("----------------\r\n");

//console.log(fakerator);

console.log(fakerator.times(fakerator.random.number, 10, 10, 1, 1));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.names.name, 10));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.company.name, 10));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.phone.number, 10));
console.log("----------------\r\n");


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
var numbers = [1,2,3,4,5,6,7,8,9,10]
for(var i = 0; i < 10; i++) {
	console.log(fakerator.shuffle(numbers).join(", "));
}
console.log("----------------\r\n");
*/

console.log(fakerator.times(fakerator.internet.image, 10, 1920, 1080, "animals"));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.internet.avatar, 10));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.internet.userName, 10));
console.log("----------------\r\n");

//console.log(fakerator.internet.userName("Icebob"));
console.log(fakerator.times(fakerator.populate, 10, "#{internet.userName}", "Icebob"));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.internet.url, 10));
console.log("----------------\r\n");


console.log(fakerator.times(fakerator.internet.ip, 10));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.internet.color, 10));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.internet.mac, 10));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.internet.password, 10, 12, false));
console.log("----------------\r\n");

console.log(fakerator.times(fakerator.internet.userName, 10));
console.log("----------------\r\n");


/*

setInterval( function() {
	console.log(fakerator.random.number(10, 1));

}, 500);*/