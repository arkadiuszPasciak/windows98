import { expect, test } from "@playwright/experimental-ct-react"
import { MFTimer } from "../../src/ui/views"

test.describe("Controller", () => {
	test("should interact with buttons to increase or decrease hours, minutes and seconds", async ({
		mount,
	}) => {
		const component = await mount(<MFTimer onCloseProgram={() => {}} />)

		const hoursUpButton = component.getByTestId(
			"hours-stepper-button-arrow-top",
		)
		const hoursDownButton = component.getByTestId(
			"hours-stepper-button-arrow-bottom",
		)
		const minutesUpButton = component.getByTestId(
			"minutes-stepper-button-arrow-top",
		)
		const minutesDownButton = component.getByTestId(
			"minutes-stepper-button-arrow-bottom",
		)
		const secondsUpButton = component.getByTestId(
			"seconds-stepper-button-arrow-top",
		)
		const secondsDownButton = component.getByTestId(
			"seconds-stepper-button-arrow-bottom",
		)

		await hoursUpButton.click()
		await minutesUpButton.click()
		await secondsUpButton.click()

		const hoursInput = component.getByTestId("hours-stepper-input-input-input")
		const minutesInput = component.getByTestId(
			"minutes-stepper-input-input-input",
		)
		const secondsInput = component.getByTestId(
			"seconds-stepper-input-input-input",
		)

		await expect(hoursInput, "hours input is visible").toBeVisible()
		await expect(minutesInput, "minutes input is visible").toBeVisible()
		await expect(secondsInput, "seconds input is visible").toBeVisible()

		await expect(hoursInput).toHaveValue("1")
		await expect(minutesInput).toHaveValue("1")
		await expect(secondsInput).toHaveValue("1")

		await hoursDownButton.click()
		await minutesDownButton.click()
		await secondsDownButton.click()

		await expect(hoursInput).toHaveValue("0")
		await expect(minutesInput).toHaveValue("0")
		await expect(secondsInput).toHaveValue("0")
	})
})
