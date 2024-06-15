// TODO import my own typescript rules
// TODO check is typescript working in vue files

import eslintVuePlugin from "eslint-plugin-vue"

export default [
	{
		...eslintVuePlugin.configs["flat/recommended"],
		files: [
			"**/*.vue"
		],
		rules: {
			"vue/require-default-prop": "off",
			"vue/multi-word-component-names": "off",
		}
	},
]
