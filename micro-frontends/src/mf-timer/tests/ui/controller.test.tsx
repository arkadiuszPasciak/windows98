import { expect, test } from "@playwright/experimental-ct-react"
import { MFTimer } from "../../src/ui/views"

test.describe("Controller", () => {
	test("should interact with buttons to increase or decrease hours, minutes and seconds", async ({
		mount,
	}) => {
		const component = await mount(<MFTimer onCloseProgram={() => {}} />)

		const hoursUpButton = component.getByTestId("ds-button-arrow-hours-top")
		const hoursDownButton = component.getByTestId(
			"ds-button-arrow-hours-bottom",
		)
		const minutesUpButton = component.getByTestId("ds-button-arrow-minutes-top")
		const minutesDownButton = component.getByTestId(
			"ds-button-arrow-minutes-bottom",
		)
		const secondsUpButton = component.getByTestId("ds-button-arrow-seconds-top")
		const secondsDownButton = component.getByTestId(
			"ds-button-arrow-seconds-bottom",
		)

		await hoursUpButton.click()
		await minutesUpButton.click()
		await secondsUpButton.click()

		await expect(
			component.getByTestId("ds-input-input-stepper-hours"),
		).toHaveValue("1")
		await expect(
			component.getByTestId("ds-input-input-stepper-minutes"),
		).toHaveValue("1")
		await expect(
			component.getByTestId("ds-input-input-stepper-seconds"),
		).toHaveValue("1")

		await hoursDownButton.click()
		await minutesDownButton.click()
		await secondsDownButton.click()

		await expect(
			component.getByTestId("ds-input-input-stepper-hours"),
		).toHaveValue("0")
		await expect(
			component.getByTestId("ds-input-input-stepper-minutes"),
		).toHaveValue("0")
		await expect(
			component.getByTestId("ds-input-input-stepper-seconds"),
		).toHaveValue("0")
	})
})
