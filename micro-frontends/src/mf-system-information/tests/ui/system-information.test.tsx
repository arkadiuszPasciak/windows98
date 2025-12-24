import { expect, test } from "@playwright/experimental-ct-react"
import { MFSystemInformation } from "../../src/ui/views/system-information"

const testMock = [
	{
		name: "battery",
		items: [
			{
				label: "level",
				value: "85%",
			},
			{
				label: "status",
				value: "charging",
			},
		],
	},
	{
		name: "browser",
		items: [
			{
				label: "name",
				value: "chrome",
			},
		],
	},
]

test.describe("SystemInformation", () => {
	test("As a user, I can view system information", async ({ mount }) => {
		const component = await mount(<MFSystemInformation sections={testMock} />)

		for (const section of testMock) {
			const sectionFrame = component.getByTestId(
				`mf-system-information-section-${section.name}-frame`,
			)
			await expect(sectionFrame).toBeVisible()

			for (const item of section.items) {
				const itemValue = component.getByTestId(
					`mf-system-information-section-${section.name}-${item.label}-value`,
				)
				await expect(itemValue).toContainText(item.value)
			}
		}
	})
})
