import { describe, expect, it } from "vitest"
import { ThemeDomain } from "../../src/domain/domains"
import { EThemes } from "../../src/domain/models"

describe("ThemeDomain", () => {
	const themeDomain = new ThemeDomain()

	it("setTheme should update the theme correctly", () => {
		themeDomain.setTheme(EThemes.DARK)
		expect(themeDomain.theme).toBe(EThemes.DARK)

		themeDomain.setTheme(EThemes.LIGHT)
		expect(themeDomain.theme).toBe(EThemes.LIGHT)
	})

	it("setTheme should not update the theme if the same theme is passed", () => {
		themeDomain.setTheme(EThemes.LIGHT)
		expect(themeDomain.theme).toBe(EThemes.LIGHT)

		themeDomain.setTheme(EThemes.LIGHT)
		expect(themeDomain.theme).toBe(EThemes.LIGHT)
	})
})
