import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { AppConfigDomain } from "../../src/domain/domains"

enum TestThemes {
	LIGHT = "light",
	DARK = "dark",
}

enum TestLanguages {
	EN = "en",
	FR = "fr",
}

interface TestConfig {
	theme: TestThemes
	language: TestLanguages
}

describe("AppConfigDomain", () => {
	let appConfigDomain: AppConfigDomain<TestConfig>

	beforeEach(() => {
		const defaultConfig: TestConfig = {
			theme: TestThemes.LIGHT,
			language: TestLanguages.EN,
		}

		appConfigDomain = AppConfigDomain.getInstance(defaultConfig)
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("getInstance should return a singleton instance", () => {
		const instance1 = AppConfigDomain.getInstance({
			language: TestLanguages.EN,
			theme: TestThemes.LIGHT,
		})

		const instance2 = AppConfigDomain.getInstance({
			language: TestLanguages.FR,
			theme: TestThemes.DARK,
		})

		expect(instance1).toBe(instance2)
		expect(instance1.config.language).toBe(TestLanguages.EN)
		expect(instance1.config.theme).toBe(TestThemes.LIGHT)
	})

	it("set should update the language", () => {
		appConfigDomain.set("language", TestLanguages.FR)

		expect(appConfigDomain.config.language).toBe(TestLanguages.FR)
	})

	it("set should update the theme", () => {
		appConfigDomain.set("theme", TestThemes.DARK)

		expect(appConfigDomain.config.theme).toBe(TestThemes.DARK)
	})
})
