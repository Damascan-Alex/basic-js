const CustomError = require('../extensions/custom-error')

module.exports = function countCats(matrix) {
	let cats = []
	matrix.forEach((subArray) => {
		subArray.forEach((element) => {
			return element === '^^' ? cats.push(element) : ''
		})
	})
	return cats.length
}
