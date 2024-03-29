import { defineConfig, devices } from "@playwright/experimental-ct-react"

export default defineConfig({
	snapshotDir: "./snapshots",
	timeout: 10 * 1000,
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	outputDir: "./test-results",
	reporter: [["list"], ["json", { outputFile: "./test-results/results.json" }]],
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],
})
