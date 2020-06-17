module.exports = {
	month: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],

	weekday: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],

	weekdayShort: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],

	weekdayMin: [
		"Su",
		"Mo",
		"Tu",
		"We",
		"Th",
		"Fr",
		"Sa"
	],	

	timezone: require("./timezone"),

	past(years = 1, refDate) {
		let date = refDate ? new Date(Date.parse(refDate)) : new Date();
		let min = 1000;
		let max = years * 365 * 24 * 3600 * 1000;

		let past = date.getTime();
		past -= this.random.number(min, max); // some time from now to N years ago, in milliseconds
		date.setTime(past);

		return date;
	},

	future(years = 1, refDate) {
		let date = refDate ? new Date(Date.parse(refDate)) : new Date();
		let min = 1000;
		let max = years * 365 * 24 * 3600 * 1000;

		let future = date.getTime();
		future += this.random.number(min, max); // some time from now to N years ago, in milliseconds
		date.setTime(future);

		return date;
	},

	between(from, to) {
		let fromMilli = Date.parse(from);
		let dateOffset = this.random.number(Date.parse(to) - fromMilli);

		let newDate = new Date(fromMilli + dateOffset);

		return newDate;		
	},

	recent(days = 1) {
		let date = new Date();
		let min = 1000;
		let max = days * 24 * 3600 * 1000;

		let past = date.getTime();
		past -= this.random.number(min, max); // some time from now to N days ago, in milliseconds
		date.setTime(past);

		return date;	
	},

	age(min = 18, max = 80) {
		return this.random.number(min, max);
	}
};