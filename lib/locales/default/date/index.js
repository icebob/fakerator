module.exports = {
	months: [],
	days: [],
	timezone: require("./timezone"),

	past(years, refDate) {
		let date = refDate ? new Date(Date.parse(refDate)) : new Date();
		let min = 1000;
		let max = (years || 1) * 365 * 24 * 3600 * 1000;

		let past = date.getTime();
		past -= this.random.number(max, min); // some time from now to N years ago, in milliseconds
		date.setTime(past);

		return date;
	},

	future(years, refDate) {
		let date = refDate ? new Date(Date.parse(refDate)) : new Date();
		let min = 1000;
		let max = (years || 1) * 365 * 24 * 3600 * 1000;

		let future = date.getTime();
		future += this.random.number(max, min); // some time from now to N years ago, in milliseconds
		date.setTime(future);

		return date;
	},

	between(from, to) {
		let fromMilli = Date.parse(from);
		let dateOffset = this.random.number(Date.parse(to) - fromMilli);

		let newDate = new Date(fromMilli + dateOffset);

		return newDate;		
	},

	recent(days) {
		let date = new Date();
		let min = 1000;
		let max = (days || 1) * 24 * 3600 * 1000;

		let past = date.getTime();
		past -= this.random.number(max, min); // some time from now to N days ago, in milliseconds
		date.setTime(past);

		return date;	
	}
};