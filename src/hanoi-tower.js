const CustomError = require('../extensions/custom-error')

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	turns = 2 ** disksNumber - 1
	seconds = Math.floor((turns / turnsSpeed) * 3600)

	let tower = {
		turns: +`${this.turns}`,
		seconds: +`${this.seconds}`,
	}
	return tower
}
