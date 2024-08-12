import { expect, test } from "@playwright/experimental-ct-react"
import { DSButton } from "./ds-button"
import type { DSButtonProps } from "./ds-button.type"

const defaultButton: DSButtonProps = {
	text: "Click Me",
	id: "open-modal",
	onClick: () => { },
}

const disabledButton: DSButtonProps = {
	...defaultButton,
	disabled: true,
}

const buttonWithIcons: DSButtonProps = {
	...defaultButton,
	iconLeft: <span data-testid="icon-left">Left Icon</span>,
	iconRight: <span data-testid="icon-right">Right Icon</span>,
}

const buttonWithoutText: DSButtonProps = {
	...defaultButton,
	isTextVisible: false,
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSButton", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<div><DSButton {...defaultButton} /></div>)

		const buttonElement = await component.getByRole("button", { name: "Click Me" })

		await expect(buttonElement).toBeVisible()
	})

	test("handles click event", async ({ mount }) => {
		let clicked = false
		const handleClick = () => {
			clicked = true
		}

		const component = await mount(<div><DSButton {...defaultButton} onClick={handleClick} /></div>)

		const buttonElement = await component.getByRole("button", { name: "Click Me" })

		await buttonElement.click()

		expect(clicked).toBe(true)
	})

	test("does not allow click when disabled", async ({ mount }) => {
		const component = await mount(<div><DSButton {...disabledButton} /></div>)

		const buttonElement = await component.getByRole("button", { name: "Click Me" })

		await expect(buttonElement).toBeDisabled()
	})

	test("renders with icons", async ({ mount }) => {
		const component = await mount(<div><DSButton {...buttonWithIcons} /></div>)

		const iconLeft = await component.getByTestId("icon-left")
		const iconRight = await component.getByTestId("icon-right")

		await expect(iconLeft).toBeVisible()
		await expect(iconRight).toBeVisible()
	})

	test("renders without text when isTextVisible is false", async ({ mount }) => {
		const component = await mount(<div><DSButton {...buttonWithoutText} /></div>)

		const buttonElement = await component.getByRole("button", { name: "Click Me" })

		await expect(buttonElement).toHaveAttribute("aria-label", "Click Me")
		await expect(buttonElement).not.toHaveText("Click Me")
	})
})