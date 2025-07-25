import { expect, test } from "@playwright/experimental-ct-react"
import type { Pulpit } from "../../src/domain/models"
import { PulpitView } from "../../src/ui/views"

const testMock: Pulpit = {
	items: [
		{
			name: "my-computer",
		},
		{
			name: "recycle",
		},
	],
}

test.describe("Pulpit", () => {
	test("render wrapper with pulpit items", async ({ mount }) => {
		const component = await mount(<PulpitView {...testMock} />)
		const pulpitWrapper = component.getByTestId("mf-pulpit-wrapper")

		expect(pulpitWrapper).toBeVisible()

		const items = pulpitWrapper.locator('[data-testid="mf-pulpit-item"]')
		await expect(items).toHaveCount(testMock.items.length)

		for (const item of testMock.items) {
			const itemElement = items.locator(`text=${item.name}`)
			await expect(itemElement).toBeVisible()

			const iconElement = itemElement.locator("img")
			await expect(iconElement).toHaveAttribute(
				"src",
				`/icons/programs/${item.name}.png`,
			)
			await expect(iconElement).toHaveAttribute("alt", item.name)
		}
	})
})
