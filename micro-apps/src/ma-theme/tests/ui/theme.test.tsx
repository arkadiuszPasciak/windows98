import { expect, test } from "@playwright/experimental-ct-react"
import { ThemeView } from "../../src/ui/views"

test.describe("Theme", () => {
	test("when I select light theme, the theme is set to light", async ({
		mount,
	}) => {
		const component = await mount(<ThemeView />)

		const themeSelect = component.getByTestId("ds-select-select-ma-theme-theme")
		await themeSelect.selectOption({ value: "light" })

		const selectedOption = await themeSelect.inputValue()
		await expect(selectedOption).toBe("light")
	})

	test("when I select dark theme, the theme is set to dark", async ({
		mount,
	}) => {
		const component = await mount(<ThemeView />)

		const themeSelect = component.getByTestId("ds-select-select-ma-theme-theme")
		await themeSelect.selectOption({ value: "dark" })

		const selectedOption = await themeSelect.inputValue()
		await expect(selectedOption).toBe("dark")
	})

	test("default theme is light", async ({ mount }) => {
		const component = await mount(<ThemeView />)

		const themeSelect = component.getByTestId("ds-select-select-ma-theme-theme")
		const selectedOption = await themeSelect.inputValue()

		expect(selectedOption).toBe("light")
	})
})