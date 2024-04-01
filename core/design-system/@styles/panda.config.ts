import { defineConfig } from "@pandacss/dev"
import {
	customTokens,
	customSemanticTokens
} from "./src/themes/index"

export default defineConfig({
	clean: true,
	cwd: "./@styles",
	eject: false,
	include: [
		"./src/components/**/*.ts"
	],
	jsxFramework: "react",
	minify: true,
	outdir: "./@styles/src/styled-system",
	preflight: false,
	prefix: "ds",
	separator: "-",
	strictTokens: true,
	theme: {
		tokens: customTokens,
		semanticTokens: customSemanticTokens
	}
})
