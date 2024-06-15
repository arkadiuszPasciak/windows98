// TODO: Import my base config
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		...tseslint.configs.recommended,
		files: [
			"**/*.ts",
			"**/*.tsx"
		],
	},

)
