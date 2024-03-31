import { defineConfig } from "@pandacss/dev"
import {
	customTokens,
	customSemanticTokens
} from "./src/themes/index"

export default defineConfig({
	clean: true,
	cwd: "./@styles",
	include: [
		"./src/components/**/*.ts"
	],
	jsxFramework: "react",
	minify: true,
	outdir: "./@styles/src/styled-system",
	preflight: true,
	prefix: "ds",
	separator: "-",
	strictTokens: true,
	theme: {
		...customTokens,
		...customSemanticTokens
	}
})
