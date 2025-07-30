import { expect, test } from "@playwright/experimental-ct-react"
import { DSStepper, type DSStepperProps } from "./index"

const defaultStepper: DSStepperProps = {
	id: "id",
	modelValue: 0,
	disabled: false,
	onIncrease: () => {},
	onDecrease: () => {},
}

const disabledStepper: DSStepperProps = {
	...defaultStepper,
	disabled: true,
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSStepper", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<DSStepper {...defaultStepper} />)

		const decreaseButton = component.getByTestId(
			`${defaultStepper.id}-stepper-button-arrow-bottom`,
		)
		const increaseButton = component.getByTestId(
			`${defaultStepper.id}-stepper-button-arrow-top`,
		)

		await expect(component).toBeVisible()
		await expect(decreaseButton).toBeVisible()
		await expect(increaseButton).toBeVisible()
	})

	test("does not allow increase or decrease when disabled", async ({
		mount,
	}) => {
		const component = await mount(<DSStepper {...disabledStepper} />)

		const increaseButton = component.getByTestId(
			`${defaultStepper.id}-stepper-button-arrow-top`,
		)
		const decreaseButton = component.getByTestId(
			`${defaultStepper.id}-stepper-button-arrow-bottom`,
		)

		const isIncreaseDisabled = await increaseButton.isDisabled()
		const isDecreaseDisabled = await decreaseButton.isDisabled()

		expect(isIncreaseDisabled).toBe(true)
		expect(isDecreaseDisabled).toBe(true)
	})
})
