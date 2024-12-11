import { describe, expect, it, vi } from "vitest"
import { AttributeLanguageStrategy } from "../../src/domain/domains/strategies/attribute.strategy"
import { EAttributes } from "../../src/domain/models"

describe("AttributeLanguageStrategy", () => {
	it("should apply the theme by setting the attribute on the HTML element", () => {
		const languages = {
			pl: "pl",
			en: "en",
		}
		const mockElement = document.createElement("html")
		document.querySelector = vi.fn().mockReturnValue(mockElement)
		const strategy = new AttributeLanguageStrategy()

		strategy.applyLanguage(languages.pl)
		expect(mockElement.getAttribute(EAttributes.LANGUAGE)).toBe(languages.pl)

		strategy.applyLanguage(languages.en)
		expect(mockElement.getAttribute(EAttributes.LANGUAGE)).toBe(languages.en)
	})

	it("should throw an error if the HTML element is not found", () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		const strategy = new AttributeLanguageStrategy()

		expect(() => strategy.applyLanguage("en")).toThrow("Element HTML not found")
	})
})
