import { expect, test } from "@playwright/experimental-ct-react"
import { MFColorGenerator } from "../../src/ui/views"

const colorTypes = ["cmyk", "hex", "hsl", "hsv", "rgb"] as const

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

		const inputs = Object.fromEntries(
			colorTypes.map((type) => [
				type,
				component.getByTestId(`mf-color-generator-${type}-input-input`),
			]),
		) as Record<
			(typeof colorTypes)[number],
			ReturnType<typeof component.getByTestId>
		>

		for (const type of colorTypes) {
			await expect(
				inputs[type],
				`${type.toUpperCase()} input should be visible`,
			).toBeVisible()
			await expect(
				inputs[type],
				`${type.toUpperCase()} input should be readonly`,
			).toHaveAttribute("readonly")
		}

		const initialValues = Object.fromEntries(
			await Promise.all(
				colorTypes.map(async (type) => [type, await inputs[type].inputValue()]),
			),
		) as Record<(typeof colorTypes)[number], string>

		expect(
			initialValues.cmyk,
			"Should contain valid CMYK color format",
		).toMatch(
			/^cmyk\(\d+(\.\d+)?%, \d+(\.\d+)?%, \d+(\.\d+)?%, \d+(\.\d+)?%\)$/,
		)
		expect(initialValues.hex, "Should contain valid HEX color format").toMatch(
			/^#[0-9a-f]{6}$/,
		)
		expect(initialValues.hsl, "Should contain valid HSL color format").toMatch(
			/^hsl\(\d+, \d+%, \d+%\)$/,
		)
		expect(initialValues.hsv, "Should contain valid HSV color format").toMatch(
			/^hsv\(\d+, \d+%, \d+%\)$/,
		)
		expect(initialValues.rgb, "Should contain valid RGB color format").toMatch(
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

		await expect
			.poll(async () => await inputs.hex.inputValue(), { timeout: 1000 })
			.not.toBe(initialValues.hex)

		const newValues = Object.fromEntries(
			await Promise.all(
				colorTypes.map(async (type) => [type, await inputs[type].inputValue()]),
			),
		) as Record<(typeof colorTypes)[number], string>

		expect(newValues.cmyk, "New CMYK should maintain valid format").toMatch(
			/^cmyk\(\d+(\.\d+)?%, \d+(\.\d+)?%, \d+(\.\d+)?%, \d+(\.\d+)?%\)$/,
		)
		expect(newValues.hex, "New HEX should maintain valid format").toMatch(
			/^#[0-9a-f]{6}$/,
		)
		expect(newValues.hsl, "New HSL should maintain valid format").toMatch(
			/^hsl\(\d+, \d+%, \d+%\)$/,
		)
		expect(newValues.hsv, "New HSV should maintain valid format").toMatch(
			/^hsv\(\d+, \d+%, \d+%\)$/,
		)
		expect(newValues.rgb, "New RGB should maintain valid format").toMatch(
			/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/,
		)

		await generateButton.click()

		await expect
			.poll(async () => await inputs.hex.inputValue(), { timeout: 1000 })
			.not.toBe(newValues.hex)

		const updatedHex = await inputs.hex.inputValue()
		expect(updatedHex, "Second HEX should maintain valid format").toMatch(
			/^#[0-9a-f]{6}$/,
		)

		const backgroundColor = await colorBox.evaluate(
			(el) => getComputedStyle(el).backgroundColor,
		)
		expect(
			backgroundColor,
			"Color box should have background color applied",
		).toBeTruthy()
	})

	test("should copy all color formats to clipboard", async ({
		mount,
		context,
		page,
	}) => {
		await context.grantPermissions(["clipboard-read", "clipboard-write"])
		const component = await mount(
			<MFColorGenerator onCloseProgram={() => {}} />,
		)

		for (const type of colorTypes) {
			const input = component.getByTestId(
				`mf-color-generator-${type}-input-input`,
			)
			const copyButton = component.getByTestId(
				`mf-color-generator-copy-${type}-button`,
			)

			await copyButton.click()

			const clipboard = await page.evaluate("navigator.clipboard.readText()")
			expect(clipboard, `Clipboard should contain ${type} value`).toBe(
				await input.inputValue(),
			)
		}
	})
})
