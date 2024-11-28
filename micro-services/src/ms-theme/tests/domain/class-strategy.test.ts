import { describe, expect, it, vi } from "vitest"
import { ClassThemeStrategy } from "../../src/domain/domains"

describe("ClassThemeStrategy", () => {
	it("should apply the theme by setting the class on the HTML element", () => {
		const themes = {
			dark: "dark",
			light: "light",
		}

		const mockElement = document.createElement("html")
		document.querySelector = vi.fn().mockReturnValue(mockElement)
		const strategy = new ClassThemeStrategy()

		strategy.applyTheme(themes.light)
		expect(mockElement.className).toBe(`theme-${themes.light}`)

		strategy.applyTheme(themes.dark)
		expect(mockElement.className).toBe(`theme-${themes.dark}`)
	})

	it("should throw an error if the HTML element is not found", () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		const strategy = new ClassThemeStrategy()

		expect(() => strategy.applyTheme("dark")).toThrow("Element not found")
	})
})
