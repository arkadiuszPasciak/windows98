import { describe, expect, it, vi } from "vitest"
import { AttributeThemeStrategy } from "../../src/domain/domains/strategies/attribute.strategy"
import { EAttributes } from "../../src/domain/models"

describe("AttributeThemeStrategy", () => {
	it("should apply the theme by setting the attribute on the HTML element", () => {
		const themes = {
			dark: "dark",
			light: "light",
		}
		const mockElement = document.createElement("html")
		document.querySelector = vi.fn().mockReturnValue(mockElement)
		const strategy = new AttributeThemeStrategy()

		strategy.applyTheme(themes.light)
		expect(mockElement.getAttribute(EAttributes.THEME)).toBe(themes.light)

		strategy.applyTheme(themes.dark)
		expect(mockElement.getAttribute(EAttributes.THEME)).toBe(themes.dark)
	})

	it("should throw an error if the HTML element is not found when applying a theme", () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		const strategy = new AttributeThemeStrategy()

		expect(() => strategy.applyTheme("dark")).toThrow("Element HTML not found")
	})

	it("should get the current theme from the HTML element's attribute", () => {
		const themes = {
			dark: "dark",
			light: "light",
		}
		const mockElement = document.createElement("html")
		mockElement.setAttribute(EAttributes.THEME, themes.light)
		document.querySelector = vi.fn().mockReturnValue(mockElement)
		const strategy = new AttributeThemeStrategy()

		const currentTheme = strategy.getTheme()
		expect(currentTheme).toBe(themes.light)
	})

	it("should throw an error if the HTML element is not found when getting the theme", () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		const strategy = new AttributeThemeStrategy()

		expect(() => strategy.getTheme()).toThrow("Element HTML not found")
	})

	it("should throw an error if the theme attribute is not found on the HTML element", () => {
		const mockElement = document.createElement("html")
		document.querySelector = vi.fn().mockReturnValue(mockElement)
		const strategy = new AttributeThemeStrategy()

		expect(() => strategy.getTheme()).toThrow(
			"Theme attribute not found on the HTML element",
		)
	})
})
