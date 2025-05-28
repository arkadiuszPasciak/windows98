import { expect, test } from "@playwright/experimental-ct-react"
import { MFSettings } from "../../src/ui/views"

test.describe("Settings", () => {
	test("As a user, I can switch between different settings tabs", async ({
		mount,
	}) => {
		const component = await mount(
			<MFSettings
				onCloseProgram={() => console.log("settings is closed!")}
				languages={["de", "en", "pl"]}
				onChangeLanguage={(language: string) => {
					console.log(`language ${language} is changed!`)
				}}
				themes={["dark", "light"]}
				onChangeTheme={(theme: string) => {
					console.log(`theme ${theme} is changed!`)
				}}
			/>,
		)

		const generalTabButton = component.getByTestId(
			"mf-settings-general-tab-button",
		)
		generalTabButton.click()

		const systemInformation = component.getByTestId(
			"mf-settings-system-information",
		)
		expect(systemInformation).toBeVisible()

		const dateAndTimeTabButton = component.getByTestId(
			"mf-settings-date-and-time-tab-button",
		)
		dateAndTimeTabButton.click()

		const dateAndTimeButton = component.getByTestId(
			"mf-settings-date-and-time-button",
		)
		dateAndTimeButton.click()

		// TODO: Fix data test id in the micro frontend
		const calendar = component.getByTestId("ds-frame-calculator")
		expect(calendar).toBeVisible()

		// TODO: Fix data test id in ds frame
		const timezone = component.getByTestId("ds-frame-timezone")
		expect(timezone).toBeVisible()

		const customiseButton = component.getByTestId(
			"mf-settings-customise-tab-button",
		)
		customiseButton.click()

		const languageManager = component.getByTestId(
			"ds-select-select-mf-language-manager",
		)
		expect(
			languageManager,
			"Language Manager is set in the customise tab",
		).toBeVisible()

		// TODO: Fix data test id in ds select
		const themeManager = component.getByTestId(
			"ds-select-select-mf-theme-manager",
		)
		expect(
			themeManager,
			"Theme Manager is set in the customise tab",
		).toBeVisible()
	})
})
