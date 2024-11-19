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

interface TestConfig {
	theme: TestThemes | undefined
	language: TestLanguages | undefined
}

describe("AppConfigBuilderDomain", () => {
	let builder: AppConfigBuilderDomain<TestConfig>

	beforeEach(() => {
		builder = new AppConfigBuilderDomain<TestConfig>({
			theme: undefined,
			language: undefined,
		})
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("build should return a correct config", () => {
		builder.add("theme", TestThemes.LIGHT)
		builder.add("language", TestLanguages.EN)

		const config = builder.build()

		expect(config).toEqual({
			theme: TestThemes.LIGHT,
			language: TestLanguages.EN,
		})
	})

	it("should throw an error if theme is missing", () => {
		builder.add("language", TestLanguages.EN)

		expect(() => builder.build()).toThrowError("missing theme")
	})

	it("should throw an error if language is missing", () => {
		builder.add("theme", TestThemes.LIGHT)

		expect(() => builder.build()).toThrowError("missing language")
	})

	it("should set theme and language correctly", () => {
		builder.add("theme", TestThemes.DARK)
		builder.add("language", TestLanguages.FR)

		const config = builder.build()

		expect(config.theme).toBe(TestThemes.DARK)
		expect(config.language).toBe(TestLanguages.FR)
	})
})
