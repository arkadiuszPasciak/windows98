import eslintVuePlugin from "eslint-plugin-vue"
import eslintVueParser from "vue-eslint-parser"

export default [
	...eslintVuePlugin.configs["flat/recommended"],
	{
		files: [
			"**/*.vue"
		],
		languageOptions: {
			parser: eslintVueParser,
		},
		rules: {
			"vue/html-indent": ["error", "tab"],
			"vue/multi-word-component-names": "off",
			"vue/require-default-prop": "off",
		}
	},
]
