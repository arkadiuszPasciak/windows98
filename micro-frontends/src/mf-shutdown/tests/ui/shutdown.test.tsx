import { expect, test } from "@playwright/experimental-ct-react"
import { MFShutdown } from "../../src/ui/views"

test.describe("Shutdown", () => {
	test("when I choose shutdown and click button ok, the application is turned off", async ({
		mount,
		page,
	}) => {
		const component = await mount(<MFShutdown onCloseProgram={() => {}} />)

		const shutDownRadio = component.getByTestId(
			"mf-shutdown-preset-shutdown-radio-input",
		)
		await shutDownRadio.click()

		const okButton = component.getByTestId("mf-shutdown-controller-ok-button")
		await okButton.click()

		await expect(page).toHaveURL("https://www.google.com")
	})

	test("when I choose restart and click button ok, the application is restarted", async ({
		mount,
		page,
	}) => {
		const component = await mount(<MFShutdown onCloseProgram={() => {}} />)

		const restartRadio = component.getByTestId(
			"mf-shutdown-preset-restart-radio-input",
		)
		await restartRadio.click()

		const okButton = component.getByTestId("mf-shutdown-controller-ok-button")
		await okButton.click()

		await expect(page).toHaveURL("/")
	})
})
