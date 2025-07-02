const path = require("node:path")

module.exports = {
	plugins: {
		"@pandacss/dev/postcss": {
			configPath: path.resolve(__dirname, "panda.config.ts"),
		},
	},
}
