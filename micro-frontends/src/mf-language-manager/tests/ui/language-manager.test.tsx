import { expect, test } from "@playwright/experimental-ct-react"
import { LanguageManagerView } from "../../src/ui/views"

test.describe("LanguageManager", () => {
	test("As a user, I can view and select languages", async ({ mount }) => {
		const languages = ["de", "en"]
		let selectedLanguage = ""
		const onChangeLanguage = (language: string) => {
			selectedLanguage = language
		}

		const component = await mount(
			<LanguageManagerView
				languages={languages}
				onChangeLanguage={onChangeLanguage}
			/>,
		)
		const dropdown = component.getByTestId("mf-language-manager-select-select")

		const selectAndVerifyLanguage = async (language: string) => {
			await dropdown.selectOption(language)
			const selectedValue = await dropdown.inputValue()

			expect(
				selectedValue,
				`The dropdown should reflect the user's selected language value (${language})`,
			).toBe(language)
			expect(
				selectedLanguage,
				`The onChangeLanguage callback should be called with the selected language value (${language})`,
			).toBe(language)
		}

		await selectAndVerifyLanguage("en")

		await selectAndVerifyLanguage("de")
	})
})
