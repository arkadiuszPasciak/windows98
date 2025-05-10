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

	it("should throw an error if the HTML element is not found when applying a theme", () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		const strategy = new ClassThemeStrategy()

		expect(() => strategy.applyTheme("dark")).toThrow("Element HTML not found")
	})

	it("should get the current theme from the HTML element's class name", () => {
		const themes = {
			dark: "dark",
			light: "light",
		}

		const mockElement = document.createElement("html")
		mockElement.className = `theme-${themes.light}`
		document.querySelector = vi.fn().mockReturnValue(mockElement)
		const strategy = new ClassThemeStrategy()

		const currentTheme = strategy.getTheme()
		expect(currentTheme).toBe(themes.light)
	})

	it("should throw an error if the HTML element is not found when getting the theme", () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		const strategy = new ClassThemeStrategy()

		expect(() => strategy.getTheme()).toThrow("Element HTML not found")
	})

	it("should throw an error if the class name does not follow the theme convention", () => {
		const mockElement = document.createElement("html")
		mockElement.className = "invalid-class"
		document.querySelector = vi.fn().mockReturnValue(mockElement)
		const strategy = new ClassThemeStrategy()

		expect(() => strategy.getTheme()).toThrow("Unable to get the current theme")
	})
})
