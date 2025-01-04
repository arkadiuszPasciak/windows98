import { expect, test } from "@playwright/experimental-ct-react"
import type { Pulpit } from "../../src/domain/models"
import { PulpitView } from "../../src/ui/views"

const testMock: Pulpit = {
	items: [
		{
			name: "my computer",
			icon: "https://placehold.co/50x50",
		},
		{
			name: "recycling",
			icon: "https://placehold.co/50x50",
		},
	],
}

test.describe("Pulpit", () => {
	test("render wrapper with pulpit items", async ({ mount }) => {
		const component = await mount(<PulpitView {...testMock} />)
		const pulpitWrapper = component.getByTestId("ma-pulpit-wrapper")

		expect(pulpitWrapper).toBeVisible()

		const items = pulpitWrapper.locator('[data-testid="ma-pulpit-item"]')
		await expect(items).toHaveCount(testMock.items.length)

		for (const item of testMock.items) {
			const itemElement = items.locator(`text=${item.name}`)
			await expect(itemElement).toBeVisible()

			const iconElement = itemElement.locator("img")
			await expect(iconElement).toHaveAttribute("src", item.icon)
			await expect(iconElement).toHaveAttribute("alt", item.name)
		}
	})
})
