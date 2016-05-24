module.exports = {
	word: require("./word"),
	supplemental: require("./supplemental"),

	sentence() {
		let wordCount = this.random.number(10, 3);

		let words = [];
		for(wordCount; wordCount > 0; wordCount--)
			words.push(this.lorem.word());

		return this.capitalize(words.join(" ")) + ".";
	},

	paragraph() {
		let sentenceCount = this.random.number(6, 3);

		let sentences = [];
		for(sentenceCount; sentenceCount > 0; sentenceCount--)
			sentences.push(this.lorem.sentence());

		return sentences.join(" ");
	}
};