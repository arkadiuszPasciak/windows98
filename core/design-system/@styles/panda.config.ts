import { defineConfig } from "@pandacss/dev"
import {
	customTokens,
	customSemanticTokens
} from "./src/themes/index"

export default defineConfig({
	include: [
		"../src/components/**/*.styles.ts"
	],
	outdir: "./@styles/src/styled-system",
	preflight: true,
	theme: {
		...customTokens,
		...customSemanticTokens
	}
})
