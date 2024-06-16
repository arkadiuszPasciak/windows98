import eslintConfig from "@eslint/js"
import globals from "globals"

export default [
	{
		...eslintConfig.configs.recommended,
		ignores: [
			"build/*",
			"dist/*",
			"node_modules/*",
		],
		files: [
			"**/*.js",
			"**/*.jsx",
			"**/*.mjs",
			"**/*.mts",
			"**/*.ts",
			"**/*.tsx",
		],
		languageOptions: {
			ecmaVersion: "latest",
			globals: {
				...globals.browser,
				...globals.es2024,
				...globals.node,
			},
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
	},
]
