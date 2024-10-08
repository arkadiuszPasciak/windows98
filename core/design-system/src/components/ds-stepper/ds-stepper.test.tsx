import { expect, test } from "@playwright/experimental-ct-react"
import { DSStepperStories } from "./ds-stepper.stories"
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

		const decreaseButton = await component.getByTestId(
			`ds-button-arrow-${defaultStepper.id}-bottom`,
		)
		const increaseButton = await component.getByTestId(
			`ds-button-arrow-${defaultStepper.id}-top`,
		)

		await expect(component).toBeVisible()
		await expect(decreaseButton).toBeVisible()
		await expect(increaseButton).toBeVisible()
	})

	test("increases value", async ({ mount }) => {
		const component = await mount(<DSStepperStories />)

		const increaseButton = await component.getByTestId(
			`ds-button-arrow-${defaultStepper.id}-top`,
		)

		await increaseButton.click()

		const value = await component.getByTestId(
			`ds-input-input-stepper-${defaultStepper.id}`,
		)

		await expect(value).toHaveValue("1")
	})

	test("decreases value", async ({ mount }) => {
		const component = await mount(<DSStepperStories />)

		const decreaseButton = await component.getByTestId(
			`ds-button-arrow-${defaultStepper.id}-bottom`,
		)

		await decreaseButton.click()

		const value = await component.getByTestId(
			`ds-input-input-stepper-${defaultStepper.id}`,
		)

		await expect(value).toHaveValue("-1")
	})

	test("does not allow increase or decrease when disabled", async ({
		mount,
	}) => {
		const component = await mount(<DSStepper {...disabledStepper} />)

		const increaseButton = await component.getByTestId(
			`ds-button-arrow-${defaultStepper.id}-top`,
		)
		const decreaseButton = await component.getByTestId(
			`ds-button-arrow-${defaultStepper.id}-bottom`,
		)

		const isIncreaseDisabled = await increaseButton.isDisabled()
		const isDecreaseDisabled = await decreaseButton.isDisabled()

		await expect(isIncreaseDisabled).toBe(true)
		await expect(isDecreaseDisabled).toBe(true)
	})
})
