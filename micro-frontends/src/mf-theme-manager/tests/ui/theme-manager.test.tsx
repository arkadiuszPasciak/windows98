import { expect, test } from "@playwright/experimental-ct-react"
import { ThemeManagerView } from "../../src/ui/views"

test.describe("ThemeManager", () => {
	test("As a user, I can view and select themes", async ({ mount }) => {
		const themes = ["dark", "light"]
		let selectedTheme = ""
		const onChangeTheme = (theme: string) => {
			selectedTheme = theme
		}

		const component = await mount(
			<ThemeManagerView
				themes={themes}
				onChangeTheme={onChangeTheme}
			/>,
		)
		const dropdown = component.getByTestId("mf-theme-manager-select-select")

		const selectAndVerifyTheme = async (theme: string) => {
			await dropdown.selectOption(theme)
			const selectedValue = await dropdown.inputValue()

			expect(
				selectedValue,
				`The dropdown should reflect the user's selected theme value (${theme})`,
			).toBe(theme)
			expect(
				selectedTheme,
				`The onChangeTheme callback should be called with the selected theme value (${theme})`,
			).toBe(theme)
		}

		await selectAndVerifyTheme("light")

		await selectAndVerifyTheme("dark")
	})
})
