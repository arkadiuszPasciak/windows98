import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { AppConfigBuilderDomain } from "../../src/domain/domains"

enum TestThemes {
	LIGHT = "light",
	DARK = "dark",
}

enum TestLanguages {
	EN = "en",
	FR = "fr",
}

describe("AppConfigBuilderDomain", () => {
	let builder: AppConfigBuilderDomain<TestThemes, TestLanguages>

	beforeEach(() => {
		builder = new AppConfigBuilderDomain<TestThemes, TestLanguages>()
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("build should return a correct config", () => {
		builder.addTheme(TestThemes.LIGHT)
		builder.addLanguage(TestLanguages.EN)

		const config = builder.build()

		expect(config).toEqual({
			theme: TestThemes.LIGHT,
			language: TestLanguages.EN,
		})
	})

	it("should throw an error if theme is missing", () => {
		builder.addLanguage(TestLanguages.EN)

		expect(() => builder.build()).toThrowError("missing theme")
	})

	it("should throw an error if language is missing", () => {
		builder.addTheme(TestThemes.LIGHT)

		expect(() => builder.build()).toThrowError("missing language")
	})

	it("should set theme correctly", () => {
		builder.addTheme(TestThemes.DARK)

		expect(builder.config.theme).toBe(TestThemes.DARK)
	})

	it("should set language correctly", () => {
		builder.addLanguage(TestLanguages.FR)

		expect(builder.config.language).toBe(TestLanguages.FR)
	})
})
