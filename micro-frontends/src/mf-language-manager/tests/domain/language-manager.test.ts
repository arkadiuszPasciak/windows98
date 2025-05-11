import { beforeEach, describe, expect, it, vi } from "vitest"
import { LanguageManagerDomain } from "../../src/domain/domains"

enum TestLanguages {
	DE = "de",
	EN = "en",
	PL = "pl",
}

const defaultLanguage = TestLanguages.DE

describe("LanguageManagerDomain", () => {
	let languageManagerDomain: LanguageManagerDomain<TestLanguages>

	beforeEach(() => {
		const mockElement = window.document.querySelector("html")
		mockElement?.setAttribute("lang", defaultLanguage)
		document.querySelector = vi.fn().mockReturnValue(mockElement)

		languageManagerDomain = new LanguageManagerDomain()
	})

	it("should change the language when a new language is set", () => {
		const mockTheme = TestLanguages.PL

		languageManagerDomain.setLanguage(mockTheme)
		expect(languageManagerDomain.language).toBe(mockTheme)
	})

	it("should not change the language when the same language is set", () => {
		const mockTheme = TestLanguages.EN

		languageManagerDomain.setLanguage(mockTheme)
		expect(languageManagerDomain.language).toBe(mockTheme)

		languageManagerDomain.setLanguage(mockTheme)
		expect(languageManagerDomain.language).toBe(mockTheme)
	})

	it("should initialize the language correctly using initLanguage", () => {
		languageManagerDomain.initLanguage()

		expect(languageManagerDomain.language).toBe(defaultLanguage)
	})
})
