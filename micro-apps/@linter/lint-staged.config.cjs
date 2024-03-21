const codeConfig = require("@windows98/linters/lint-staged/code")
const stylesConfig = require("@windows98/linters/lint-staged/styles")

module.exports = {
	...codeConfig,
	...stylesConfig
}
