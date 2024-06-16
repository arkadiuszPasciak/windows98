// Todo import my own typescript rules
import eslintReactPlugin from "eslint-plugin-react"
import eslintReactHooksPlugin from "eslint-plugin-react-hooks"

export default [
	{
		...eslintReactPlugin.configs.recommended,
		...eslintReactPlugin.configs["jsx-runtime"],
		...eslintReactHooksPlugin.configs.recommended,
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
