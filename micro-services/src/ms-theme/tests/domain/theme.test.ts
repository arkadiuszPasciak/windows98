import { describe, expect, it, vi } from "vitest"
import type { ThemeStrategyContract } from "../../src/domain/contracts"
import { ThemeDomain } from "../../src/domain/domains"

describe("ThemeDomain", () => {
	it("should call applyTheme on the strategy with the correct theme", () => {
		const mockThemeStrategy: ThemeStrategyContract<string> = {
			applyTheme: vi.fn(),
		}
		const themeDomain = new ThemeDomain()
		const theme = "dark"

		themeDomain.updateTheme(theme)

		expect(mockThemeStrategy.applyTheme).toHaveBeenCalledWith(theme)
	})

	it("should initialize with the provided theme strategy", () => {
		const mockThemeStrategy: ThemeStrategyContract<string> = {
			applyTheme: vi.fn(),
		}
		const themeDomain = new ThemeDomain()

		expect(themeDomain).toBeDefined()
		expect(themeDomain).toHaveProperty("themeStrategy", mockThemeStrategy)
	})
})
