module.exports = {
	env: {
		browser: true,
		es2024: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
	],
	ignorePatterns: [
		".cache",
		"build",
		"dist",
		"node_modules",
		"test-results",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"eol-last": [
			"error",
			"always",
		],
		indent: [
			"error",
			"tab",
			{
				"ignoredNodes": ["PropertyDefinition"]
			}
		],
		"jsx-quotes": [
			"error",
			"prefer-double",
		],
		semi: [
			"error",
			"never",
		],
		quotes: [
			"error",
			"double",
		],
	}
}
