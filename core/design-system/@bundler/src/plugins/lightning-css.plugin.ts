import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { browserslistToTargets, bundle } from "lightningcss"
import type { Plugin } from "vite"

class LightningCssProcessor {
	private readonly __filename: string
	private readonly __dirname: string
	private readonly inputPath: string
	private readonly outputPath: string

	constructor() {
		this.__filename = fileURLToPath(import.meta.url)
		this.__dirname = dirname(this.__filename)
		this.inputPath = this.resolveCssSourcePath()
		this.outputPath = this.resolveCssDestinationPath()
	}

	public run(): void {
		try {
			this.ensureOutputDirectoryExists()
			const result = this.transformCssWithLightning()
			this.writeProcessedCssToDestination(result.code)
			this.celebrateSuccessfulTransformation()
		} catch (error) {
			console.error("❌ CSS processing failed:", error)
			throw error
		}
	}

	private resolveCssSourcePath(): string {
		return resolve(this.__dirname, "../../../src/styles/index.css")
	}

	private resolveCssDestinationPath(): string {
		return resolve(this.__dirname, "../../dist/styles/index.css")
	}

	private ensureOutputDirectoryExists(): void {
		mkdirSync(dirname(this.outputPath), { recursive: true })
	}

	private transformCssWithLightning(): { code: Uint8Array } {
		return bundle({
			filename: this.inputPath,
			minify: true,
			targets: browserslistToTargets([">= 0.25%"]),
		})
	}

	private writeProcessedCssToDestination(processedCss: Uint8Array): void {
		writeFileSync(this.outputPath, processedCss.toString())
	}

	private celebrateSuccessfulTransformation(): void {
		console.log("✅ CSS bundled, minified and written to dist/styles/index.css")
	}
}

export function lightningCssPlugin(): Plugin {
	const processor = new LightningCssProcessor()

	return {
		name: "lightning-css-plugin",
		generateBundle() {
			processor.run()
		},
	}
}
