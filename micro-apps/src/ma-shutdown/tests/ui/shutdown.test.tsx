import { expect, test } from "@playwright/experimental-ct-react"
import { ShutdownView } from "../../src/ui/views"

test.describe("Shutdown", () => {
	test("when I choose shutdown and click button ok, the application is turned off", async ({ mount, page }) => {
		const component = await mount(<ShutdownView />)

		const shutDownRadio = component.getByTestId("ma-shutdown-preset-shutdown-radio")
		await shutDownRadio.click()

		const okButton = component.getByTestId("ma-shutdown-controller-ok-button")
		await okButton.click()

		await expect(page).toHaveURL("https://www.google.com")
	})

	test("when I choose restart and click button ok, the application is restarted", async ({ mount, page }) => {
		const component = await mount(<ShutdownView />)

		const restartRadio = component.getByTestId("ma-shutdown-preset-restart-radio")
		await restartRadio.click()

		const okButton = component.getByTestId("ma-shutdown-controller-ok-button")
		await okButton.click()

		await expect(page).toHaveURL("/")
	})

	// @TODO need to resolve problem between old app and micro app
	test.fixme("when I click button close, the modal is closed", async ({ mount }) => {
		const component = await mount(<ShutdownView />)

		const cancelButton = component.getByTestId("ma-shutdown-controller-cancel-button")
		await cancelButton.click()

		const shutDownModal = component.getByTestId("ma-shutdown-main-modal")
		await expect(shutDownModal).toBeHidden()
	})
})
