import { expect, test } from "@playwright/experimental-ct-react"

test.fixme("Shut Down", () => {
	test("when I choose shutdown and click button ok, the application is turned off", async ({ mount, page }) => {
		const component = await mount(<p>@TODO: add component</p>)

		const shutDownRadio = component.getByTestId("ma-shutdown-shutdown-radio")
		await shutDownRadio.click()

		const okButton = component.getByTestId("ma-shutdown-ok-button")
		await okButton.click()

		await expect(page).toHaveURL("https://www.google.com")
	})

	test("when I choose restart and click button ok, the application is restarted", async ({ mount, page }) => {
		const component = await mount(<p>@TODO: add component</p>)

		const restartRadio = component.getByTestId("ma-shutdown-restart-radio")
		await restartRadio.click()

		const okButton = component.getByTestId("ma-shutdown-ok-button")
		await okButton.click()

		await expect(page).toHaveURL("/")
	})

	test("when I click button close, the modal is closed", async ({ mount }) => {
		const component = await mount(<p>@TODO: add component</p>)

		const cancelButton = component.getByTestId("ma-shutdown-cancel-button")
		await cancelButton.click()

		const shutDownModal = component.getByTestId("ma-shutdown-main-modal")
		await expect(shutDownModal).toBeHidden()
	})
})
