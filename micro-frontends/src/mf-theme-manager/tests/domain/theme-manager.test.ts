import { beforeEach, describe, expect, it, vi } from "vitest"
import { ThemeManagerDomain } from "../../src/domain/domains"

enum TestThemes {
	LIGHT = "light",
	DARK = "dark",
}

const defaultTheme = TestThemes.LIGHT

describe("ThemeManagerDomain", () => {
	let themeManagerDomain: ThemeManagerDomain<TestThemes>

	beforeEach(() => {
		const mockElement = window.document.querySelector("html")
		mockElement?.setAttribute(defaultTheme, TestThemes.LIGHT)
		document.querySelector = vi.fn().mockReturnValue(mockElement)

		themeManagerDomain = new ThemeManagerDomain()
	})

	it("should change the theme when a new theme is set", () => {
		const mockTheme = TestThemes.DARK

		themeManagerDomain.setTheme(mockTheme)
		expect(themeManagerDomain.theme).toBe(mockTheme)
	})

	it("should not change the theme when the same theme is set", () => {
		const mockTheme = TestThemes.LIGHT

		themeManagerDomain.setTheme(mockTheme)
		expect(themeManagerDomain.theme).toBe(mockTheme)

		themeManagerDomain.setTheme(mockTheme)
		expect(themeManagerDomain.theme).toBe(mockTheme)
	})

	it("should initialize the theme correctly using initTheme", () => {
		themeManagerDomain.initTheme()

		expect(themeManagerDomain.theme).toBe(defaultTheme)
	})
})
