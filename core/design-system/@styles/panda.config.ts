import { defineConfig } from "@pandacss/dev"

export default defineConfig({
	include: [
		"../src/components/**/*.styles.ts"
	],
	outdir: "./@styles/src/styled-system",
	preflight: true,
})
