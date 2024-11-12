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

describe("AppConfigDomain", () => {
	let appConfigDomain: AppConfigDomain<TestThemes, TestLanguages>

	beforeEach(() => {
		const defaultConfig = {
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

	it("setLanguage should update the language", () => {
		appConfigDomain.setLanguage(TestLanguages.FR)

		expect(appConfigDomain.config.language).toBe(TestLanguages.FR)
	})

	it("setLanguage should not update the language if the same", () => {
		appConfigDomain.setLanguage(TestLanguages.EN)

		expect(appConfigDomain.config.language).toBe(TestLanguages.EN)
	})

	it("setTheme should update the theme", () => {
		appConfigDomain.setTheme(TestThemes.DARK)

		expect(appConfigDomain.config.theme).toBe(TestThemes.DARK)
	})

	it("setTheme should not update the theme if the same", () => {
		appConfigDomain.setTheme(TestThemes.LIGHT)

		expect(appConfigDomain.config.theme).toBe(TestThemes.LIGHT)
	})
})
