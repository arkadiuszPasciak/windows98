import { expect, test } from "@playwright/experimental-ct-react"
import { MFColorGenerator } from "../../src/ui/views"

test.describe("ColorGenerator", () => {
	test("should render and work as complete color generator application", async ({
		mount,
	}) => {
		const component = await mount(
			<MFColorGenerator onCloseProgram={() => {}} />,
		)

		await expect(
			component.getByTestId("mf-color-generator-modal-container"),
			"Should render the modal window",
		).toBeVisible()

		const colorBox = component.getByTestId(
			"mf-color-generator-color-preview-box",
		)
		await expect(
			colorBox,
			"Visual color representation should be present",
		).toBeVisible()

		const hexInput = component.getByTestId(
			"mf-color-generator-hex-color-input-input",
		)
		await expect(hexInput, "Hex color input should be visible").toBeVisible()
		await expect(
			hexInput,
			"Input should be readonly for display only",
		).toHaveAttribute("readonly")
		const initialHex = await hexInput.inputValue()
		expect(initialHex, "Should contain valid hex color format").toMatch(
			/^#[0-9a-f]{6}$/,
		)

		const rgbInput = component.getByTestId(
			"mf-color-generator-rgb-color-input-input",
		)
		await expect(rgbInput, "RGB color input should be visible").toBeVisible()
		await expect(
			rgbInput,
			"Input should be readonly for display only",
		).toHaveAttribute("readonly")
		const initialRgb = await rgbInput.inputValue()
		expect(initialRgb, "Should contain valid RGB color format").toMatch(
			/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/,
		)

		const generateButton = component.getByTestId(
			"mf-color-generator-generate-color-button",
		)
		await expect(
			generateButton,
			"Generate button should be present",
		).toBeVisible()
		await expect(generateButton, "Button should be clickable").toBeEnabled()

		await generateButton.click()
		const newHex = await hexInput.inputValue()
		const newRgb = await rgbInput.inputValue()
		expect(newHex, "New hex color should be different from initial").not.toBe(
			initialHex,
		)
		expect(newRgb, "New RGB color should be different from initial").not.toBe(
			initialRgb,
		)
		expect(newHex, "New hex should maintain valid format").toMatch(
			/^#[0-9a-f]{6}$/,
		)
		expect(newRgb, "New RGB should maintain valid format").toMatch(
			/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/,
		)

		await generateButton.click()
		const secondHex = await hexInput.inputValue()
		const secondRgb = await rgbInput.inputValue()
		expect(secondHex, "Second hex should maintain valid format").toMatch(
			/^#[0-9a-f]{6}$/,
		)
		expect(secondRgb, "Second RGB should maintain valid format").toMatch(
			/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/,
		)

		const backgroundColor = await colorBox.evaluate(
			(el) => getComputedStyle(el).backgroundColor,
		)
		expect(
			backgroundColor,
			"Color box should have background color applied",
		).toBeTruthy()
	})

	test("should copy hex and rgb color to clipboard", async ({
		mount,
		context,
		page,
	}) => {
		await context.grantPermissions(["clipboard-read", "clipboard-write"])
		const component = await mount(
			<MFColorGenerator onCloseProgram={() => {}} />,
		)

		const hexInput = component.getByTestId(
			"mf-color-generator-hex-color-input-input",
		)
		const rgbInput = component.getByTestId(
			"mf-color-generator-rgb-color-input-input",
		)
		const hexCopyButton = component.getByTestId(
			"mf-color-generator-copy-hex-button",
		)
		const rgbCopyButton = component.getByTestId(
			"mf-color-generator-copy-rgb-button",
		)

		await hexCopyButton.click()

		const hexClipboard = await page.evaluate("navigator.clipboard.readText()")
		expect(hexClipboard).toContain(await hexInput.inputValue())

		await rgbCopyButton.click()

		const rgbClipboard = await page.evaluate("navigator.clipboard.readText()")
		expect(rgbClipboard).toContain(await rgbInput.inputValue())
	})
})
