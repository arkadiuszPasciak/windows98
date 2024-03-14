module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"@vue/typescript/recommended",
	],
	parserOptions: {
		ecmaVersion: "2021",
	},
	rules: {
		"vue/require-default-prop": "off",
		"vue/multi-word-component-names": "off",
	},
	ignorePatterns: ["dist", "node_modules", "mother-frontend"],
}
