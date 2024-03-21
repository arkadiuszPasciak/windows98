module.exports = {
	extends: [
		"./typescript.config.js",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/jsx-runtime"
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "18.2.0",
		},
	},
	plugins: [
		"react",
		"react-hooks"
	],
}
