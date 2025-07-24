import { defineConfig } from "@playwright/experimental-ct-react"
import componentReactConfig from "@windows98/configs/playwright/component-react"

export default defineConfig({
	...componentReactConfig,
	use: {
		trace: "on-first-retry",
		ctPort: 3100,
	},
	testDir: "../../src/components",
})
