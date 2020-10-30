const CustomError = require('../extensions/custom-error')

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false
	let teamName = members
		.filter((el) => 'string' == typeof el)
		.map((el) => el.trim()[0].toUpperCase())
		.sort()
		.join('')
	return teamName
}
