import { expect, test } from "@playwright/experimental-ct-react"
import { MFShutdown } from "../../src/ui/views"

test.describe("Shutdown", () => {
	test("when I choose shutdown and click button ok, the application is turned off", async ({
		mount,
		page,
	}) => {
		const component = await mount(<MFShutdown onCloseProgram={() => {}} />)

		const shutDownRadio = component.getByTestId(
			"mf-shutdown-preset-shutdown-radio",
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
			"mf-shutdown-preset-restart-radio",
		)
		await restartRadio.click()

		const okButton = component.getByTestId("mf-shutdown-controller-ok-button")
		await okButton.click()

		await expect(page).toHaveURL("/")
	})

	// @TODO need to resolve problem between old app and micro app
	test.fixme(
		"when I click button close, the modal is closed",
		async ({ mount }) => {
			const component = await mount(<MFShutdown onCloseProgram={() => {}} />)

			const cancelButton = component.getByTestId(
				"mf-shutdown-controller-cancel-button",
			)
			await cancelButton.click()

			const shutDownModal = component.getByTestId("mf-shutdown-main-modal")
			await expect(shutDownModal).toBeHidden()
		},
	)
})
