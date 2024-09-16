import { beforeEach, describe, expect, it, vi } from "vitest"
import { ThemeDomain } from "../../src/domain/domains"
import { EAttributes, EStorageKeys } from "../../src/domain/models"

enum TestThemes {
	LIGHT = "light",
	DARK = "dark",
}

describe("ThemeDomain", () => {
	let themeDomain: ThemeDomain<TestThemes>

	beforeEach(() => {
		Object.defineProperty(window, "localStorage", {
			value: {
				setItem: vi.fn(),
				getItem: vi.fn((key) => {
					const store: { [key: string]: string } = {
						[EStorageKeys.THEME]: TestThemes.DARK,
					}
					return store[key] || null
				}),
				removeItem: vi.fn(),
				clear: vi.fn(),
			},
			writable: true,
		})
		themeDomain = new ThemeDomain<TestThemes>(TestThemes.LIGHT)
	})

	it("should initialize default theme if theme does not exist in storage", () => {
		window.localStorage.getItem = vi.fn().mockReturnValue(null)
		window.localStorage.setItem = vi.fn()
		const elementMock = {
			getAttribute: vi.fn().mockReturnValue(null),
			setAttribute: vi.fn(),
		}
		document.querySelector = vi.fn().mockReturnValue(elementMock)

		themeDomain.mountThemeColor()

		expect(window.localStorage.setItem).toHaveBeenCalledWith(
			EStorageKeys.THEME,
			TestThemes.LIGHT,
		)
		expect(elementMock.setAttribute).toHaveBeenCalledWith(
			EAttributes.THEME,
			TestThemes.LIGHT,
		)
	})

	it("should return stored theme color", () => {
		expect(themeDomain.getThemeColor()).toBe(TestThemes.DARK)
		expect(window.localStorage.getItem).toHaveBeenCalledWith(EStorageKeys.THEME)
	})

	it("should return default theme color when no theme is stored", () => {
		window.localStorage.getItem = vi.fn().mockReturnValue(null)
		expect(themeDomain.getThemeColor()).toBe(TestThemes.LIGHT)
		expect(window.localStorage.getItem).toHaveBeenCalledWith(EStorageKeys.THEME)
	})

	it("should set theme color in storage", () => {
		themeDomain.setThemeColor(TestThemes.DARK)
		expect(window.localStorage.setItem).toHaveBeenCalledWith(
			EStorageKeys.THEME,
			TestThemes.DARK,
		)
	})

	it("should not update theme if HTML element is not found", () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		themeDomain.updateTheme(TestThemes.DARK)
		expect(document.querySelector).toHaveBeenCalledWith("html")
	})

	it("should not update theme if current theme is the same as new theme", () => {
		const elementMock = {
			getAttribute: vi.fn().mockReturnValue(TestThemes.DARK),
			setAttribute: vi.fn(),
		}
		document.querySelector = vi.fn().mockReturnValue(elementMock)
		themeDomain.updateTheme(TestThemes.DARK)
		expect(elementMock.setAttribute).not.toHaveBeenCalled()
	})

	it("should update theme if current theme is different from new theme", () => {
		const elementMock = {
			getAttribute: vi.fn().mockReturnValue(TestThemes.LIGHT),
			setAttribute: vi.fn(),
		}
		document.querySelector = vi.fn().mockReturnValue(elementMock)
		themeDomain.updateTheme(TestThemes.DARK)
		expect(elementMock.setAttribute).toHaveBeenCalledWith(
			EAttributes.THEME,
			TestThemes.DARK,
		)
	})

	it("should update theme if theme exists in storage", () => {
		const updatTestThemespy = vi.spyOn(themeDomain, "updateTheme")
		themeDomain.mountThemeColor()
		expect(updatTestThemespy).toHaveBeenCalledWith(TestThemes.DARK)
	})
})
