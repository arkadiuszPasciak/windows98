module.exports = {
	extends: [
		"./typescript.config.js",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	plugins: [
		"react",
		"react-hooks"
	],
}
