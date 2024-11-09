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
		appConfigDomain = AppConfigDomain.getInstance(
			TestLanguages.EN,
			TestThemes.LIGHT,
		)
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("getInstance should return a singleton instance", () => {
		const instance1 = AppConfigDomain.getInstance(
			TestLanguages.EN,
			TestThemes.LIGHT,
		)
		const instance2 = AppConfigDomain.getInstance(
			TestLanguages.FR,
			TestThemes.DARK,
		)

		expect(instance1).toBe(instance2)
		expect(instance1.language).toBe(TestLanguages.EN)
		expect(instance1.theme).toBe(TestThemes.LIGHT)
	})

	it("setLanguage should update the language", () => {
		appConfigDomain.setLanguage(TestLanguages.FR)

		expect(appConfigDomain.language).toBe(TestLanguages.FR)
	})

	it("setLanguage should not update the language if the same", () => {
		appConfigDomain.setLanguage(TestLanguages.EN)

		expect(appConfigDomain.language).toBe(TestLanguages.EN)
	})

	it("setTheme should update the theme", () => {
		appConfigDomain.setTheme(TestThemes.DARK)

		expect(appConfigDomain.theme).toBe(TestThemes.DARK)
	})

	it("setTheme should not update the theme if the same", () => {
		appConfigDomain.setTheme(TestThemes.LIGHT)

		expect(appConfigDomain.theme).toBe(TestThemes.LIGHT)
	})
})
