import { describe, expect, it, vi } from "vitest"
import { ClassLanguageStrategy } from "../../src/domain/domains"

describe("ClassLanguageStrategy", () => {
	it("should apply the theme by setting the class on the HTML element", () => {
		const languages = {
			pl: "pl",
			en: "en",
		}
		const mockElement = document.createElement("html")
		document.querySelector = vi.fn().mockReturnValue(mockElement)
		const strategy = new ClassLanguageStrategy()

		strategy.applyLanguage(languages.pl)
		expect(mockElement.className).toBe(`language-${languages.pl}`)

		strategy.applyLanguage(languages.en)
		expect(mockElement.className).toBe(`language-${languages.en}`)
	})

	it("should throw an error if the HTML element is not found", () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		const strategy = new ClassLanguageStrategy()

		expect(() => strategy.applyLanguage("pl")).toThrow("Element HTML not found")
	})
})
