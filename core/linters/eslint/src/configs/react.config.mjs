import eslintReactPlugin from "eslint-plugin-react"

export default [
	{
		...eslintReactPlugin.configs.recommended,
		...eslintReactPlugin.configs["jsx-runtime"],
		files: [
			"**/*.tsx",
			"**/*.hook.ts"
		],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			}
		},
		settings: {
			react: {
				version: "18.2.0",
			},
		},
	},
]
