import { expect, test } from "@playwright/experimental-ct-react"
import { MFSystemInformation } from "../../src/ui/views/system-information"

test.describe("SystemInformation", () => {
	test("As a user, I can view system information", async ({ mount }) => {
		const component = await mount(<MFSystemInformation />)

		const browserName = component.getByTestId(
			"mf-system-information-browser-name",
		)
		const deviceType = component.getByTestId(
			"mf-system-information-device-type",
		)
		const operatingSystem = component.getByTestId(
			"mf-system-information-operating-system",
		)

		expect(browserName).toBeVisible()
		expect(deviceType).toBeVisible()
		expect(operatingSystem).toBeVisible()
	})
})
