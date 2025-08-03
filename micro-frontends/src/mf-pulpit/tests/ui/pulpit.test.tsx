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
		await expect(component).toHaveAttribute("data-testid", "mf-pulpit-wrapper")

		const items = component.locator('[data-testid="mf-pulpit-item"]')
		await expect(items).toHaveCount(testMock.items.length)
	})
})
