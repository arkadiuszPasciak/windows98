import { expect, test } from "@playwright/experimental-ct-react"
import { MFSettings } from "../../src/ui/views"

const testMock = {
	generalInformation: [
		{
			name: "battery",
			items: [
				{
					label: "level",
					value: "85%",
				},
				{
					label: "status",
					value: "charging",
				},
			],
		},
		{
			name: "browser",
			items: [
				{
					label: "name",
					value: "chrome",
				},
			],
		},
	],
	languages: ["de", "en", "pl"],
	themes: ["dark", "light"],
	onChangeLanguage: (language: string) => {
		console.log(`language ${language} is changed!`)
	},
	onChangeTheme: (theme: string) => {
		console.log(`theme ${theme} is changed!`)
	},
	onCloseProgram: () => {
		console.log("settings is closed!")
	},
}

test.describe("Settings", () => {
	test("As a user, I can switch between different settings tabs", async ({
		mount,
	}) => {
		const component = await mount(
			<MFSettings
				generalInformation={testMock.generalInformation}
				onChangeLanguage={testMock.onChangeLanguage}
				onChangeTheme={testMock.onChangeTheme}
				onCloseProgram={testMock.onCloseProgram}
				languages={testMock.languages}
				themes={testMock.themes}
			/>,
		)

		const generalTabButton = component.getByTestId(
			"mf-settings-general-tab-button",
		)
		await generalTabButton.click()

		const generalTabContent = component.getByTestId("mf-settings-general-tab")
		await expect(generalTabContent).toBeVisible()

		const dateAndTimeTabButton = component.getByTestId(
			"mf-settings-date-and-time-tab-button",
		)
		await dateAndTimeTabButton.click()

		const dateAndTimeTabContent = component.getByTestId(
			"mf-settings-date-and-time-tab-content",
		)
		await expect(dateAndTimeTabContent).toBeVisible()

		const customiseTabButton = component.getByTestId(
			"mf-settings-customise-tab-button",
		)
		await customiseTabButton.click()

		const customiseTabContent = component.getByTestId(
			"mf-settings-customise-tab-content",
		)
		await expect(customiseTabContent).toBeVisible()
	})
})
