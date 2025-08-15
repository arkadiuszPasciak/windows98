#!/usr/bin/env node

import { execSync } from "node:child_process"
import { existsSync, mkdirSync } from "node:fs"
import { dirname } from "node:path"

const inputFile = "./src/styles/index.css"
const outputFile = "./@bundler/dist/styles/index.css"

const outputDir = dirname(outputFile)
if (!existsSync(outputDir)) {
	mkdirSync(outputDir, { recursive: true })
}

console.log("🎨 Building CSS with Lightning CSS...")

const command =
	'npx lightningcss --minify --bundle --targets ">= 0.25%" ./src/styles/index.css -o ./@bundler/dist/styles/index.css'

try {
	execSync(command, {
		stdio: "inherit",
		cwd: process.cwd(),
	})
	console.log("✅ CSS build completed successfully!")
} catch (error) {
	console.error("❌ CSS build failed:", error.message)
	process.exit(1)
}
