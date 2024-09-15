import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeDomain } from '../../src/domain/domains'
import { EAttributes, EStorageKeys, EThemes } from '../../src/domain/models'

describe('ThemeDomain', () => {
	let themeDomain: ThemeDomain

	beforeEach(() => {
		Object.defineProperty(window, "localStorage", {
			value: {
				setItem: vi.fn(),
				getItem: vi.fn((key) => {
					const store: { [key: string]: string } = {
						[EStorageKeys.THEME]: EThemes.DARK,
					}
					return store[key] || null
				}),
				removeItem: vi.fn(),
				clear: vi.fn(),
			},
			writable: true,
		})
		themeDomain = new ThemeDomain()
	})

	it("should initialize default theme if theme does not exist in storage", () => {
		window.localStorage.getItem = vi.fn().mockReturnValue(null)
		window.localStorage.setItem = vi.fn()
		const elementMock = { getAttribute: vi.fn().mockReturnValue(null), setAttribute: vi.fn() }
		document.querySelector = vi.fn().mockReturnValue(elementMock)

		themeDomain.mountThemeColor()

		expect(window.localStorage.setItem).toHaveBeenCalledWith(EStorageKeys.THEME, EThemes.LIGHT)
		expect(elementMock.setAttribute).toHaveBeenCalledWith(EAttributes.THEME, EThemes.LIGHT)
	})

	it('should return stored theme color', () => {
		expect(themeDomain.getThemeColor()).toBe(EThemes.DARK)
		expect(window.localStorage.getItem).toHaveBeenCalledWith(EStorageKeys.THEME)
	})

	it('should return default theme color when no theme is stored', () => {
		window.localStorage.getItem = vi.fn().mockReturnValue(null)
		expect(themeDomain.getThemeColor()).toBe(EThemes.LIGHT)
		expect(window.localStorage.getItem).toHaveBeenCalledWith(EStorageKeys.THEME)
	})

	it('should set theme color in storage', () => {
		themeDomain.setThemeColor(EThemes.DARK)
		expect(window.localStorage.setItem).toHaveBeenCalledWith(EStorageKeys.THEME, EThemes.DARK)
	})

	it('should not update theme if HTML element is not found', () => {
		document.querySelector = vi.fn().mockReturnValue(null)
		themeDomain.updateTheme(EThemes.DARK)
		expect(document.querySelector).toHaveBeenCalledWith('html')
	})

	it('should not update theme if current theme is the same as new theme', () => {
		const elementMock = { getAttribute: vi.fn().mockReturnValue(EThemes.DARK), setAttribute: vi.fn() }
		document.querySelector = vi.fn().mockReturnValue(elementMock)
		themeDomain.updateTheme(EThemes.DARK)
		expect(elementMock.setAttribute).not.toHaveBeenCalled()
	})

	it('should update theme if current theme is different from new theme', () => {
		const elementMock = { getAttribute: vi.fn().mockReturnValue(EThemes.LIGHT), setAttribute: vi.fn() }
		document.querySelector = vi.fn().mockReturnValue(elementMock)
		themeDomain.updateTheme(EThemes.DARK)
		expect(elementMock.setAttribute).toHaveBeenCalledWith(EAttributes.THEME, EThemes.DARK)
	})

	it('should update theme if theme exists in storage', () => {
		const updateThemeSpy = vi.spyOn(themeDomain, 'updateTheme')
		themeDomain.mountThemeColor()
		expect(updateThemeSpy).toHaveBeenCalledWith(EThemes.DARK)
	})
})
