module.exports = {
	avatar: function() {
		return this.random.arrayElement(["gmail.com", "yahoo.com", "outlook.com", "mail.com"]);
	}	
}