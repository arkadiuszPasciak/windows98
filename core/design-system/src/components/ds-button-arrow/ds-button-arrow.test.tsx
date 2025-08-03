import { expect, test } from "@playwright/experimental-ct-react"
import { DSButtonArrow, type DSButtonArrowProps } from "./index"

const defaultButton: DSButtonArrowProps = {
	ariaLabel: "Test Button",
	direction: "top",
	disabled: false,
	id: "increase",
	size: "medium",
	onClick: () => {},
}

const disabledButton: DSButtonArrowProps = {
	...defaultButton,
	disabled: true,
}

const arrowBottomButton: DSButtonArrowProps = {
	...defaultButton,
	direction: "bottom",
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSButtonArrow", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(
			<DSButtonArrow
				ariaLabel={defaultButton.ariaLabel}
				direction={defaultButton.direction}
				disabled={defaultButton.disabled}
				id={defaultButton.id}
				size={defaultButton.size}
				onClick={defaultButton.onClick}
			/>,
		)

		await expect(component).toHaveRole("button")
		await expect(component).toHaveAttribute(
			"aria-label",
			defaultButton.ariaLabel,
		)
		await expect(component).toHaveAttribute(
			"data-arrow",
			defaultButton.direction,
		)
		await expect(component).toHaveAttribute(
			"data-testid",
			`${defaultButton.id}-button-arrow-top`,
		)
		await expect(component).toHaveAttribute("data-size", defaultButton.size)
	})

	test("triggers onClick when clicked", async ({ mount }) => {
		let clicked = false

		const component = await mount(
			<DSButtonArrow
				ariaLabel={defaultButton.ariaLabel}
				direction={defaultButton.direction}
				disabled={defaultButton.disabled}
				id={defaultButton.id}
				size={defaultButton.size}
				onClick={() => {
					clicked = true
				}}
			/>,
		)

		await component.click()

		expect(clicked).toBe(true)
	})

	test("does not trigger onClick when disabled", async ({ mount }) => {
		const component = await mount(
			<DSButtonArrow
				ariaLabel={disabledButton.ariaLabel}
				direction={arrowBottomButton.direction}
				disabled={disabledButton.disabled}
				id={defaultButton.id}
				size={disabledButton.size}
				onClick={() => {}}
			/>,
		)

		const isDisabled = await component.isDisabled()

		await expect(isDisabled).toBe(true)
	})
})
