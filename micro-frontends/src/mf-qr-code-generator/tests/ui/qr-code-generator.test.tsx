import { expect, test } from "@playwright/experimental-ct-react"
import { MFQRCodeGenerator } from "../../src/ui/views"

test.describe("QRCodeGenerator", () => {
	test("should allow user to generate QR code with options", async ({
		mount,
	}) => {
		const component = await mount(
			<MFQRCodeGenerator onCloseProgram={() => {}} />,
		)

		await component
			.getByTestId("mf-qr-code-generator-text-input-input")
			.fill("github.com")

		await component
			.getByTestId("mf-qr-code-generator-presets-phone-radio-label")
			.click()
		await component
			.getByTestId("mf-qr-code-generator-presets-sms-radio-label")
			.click()
		await component
			.getByTestId("mf-qr-code-generator-presets-website-radio-label")
			.click()

		await component
			.getByTestId("mf-qr-code-generator-select-size-select-select")
			.selectOption("400x400")
		await component
			.getByTestId("mf-qr-code-generator-select-format-select-select")
			.selectOption("svg")

		await component
			.getByTestId("mf-qr-code-generator-button-generate-button")
			.click()

		await expect(
			component.getByTestId("mf-qr-code-generator-qr-code-preview-box"),
		).toBeVisible()
	})
})
