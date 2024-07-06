import tseslint from "typescript-eslint"
import eslintBaseConfig from "./base.config.mjs"
import eslintReactConfig from "./react.config.mjs"
import eslintTypescriptConfig from "./typescript.config.mjs"
import eslintVueConfig from "./vue.config.mjs"

export default tseslint.config(
	...eslintBaseConfig,
	...eslintTypescriptConfig,
	// ...eslintReactConfig,
	...eslintVueConfig
)
