import { expect, test } from "@playwright/experimental-ct-react"
import { TimezoneView } from "../../src/ui/views/timezone.view"

test.describe("[ma-timezone]: wrapper", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<TimezoneView />)
		await expect(component).toBeVisible()
	})

	test("frame has correct text", async ({ mount }) => {
		const component = await mount(<TimezoneView />)
		const frame = await component.getByTestId("ds-text-frame-timezone")

		await expect(frame).toHaveText("Timezone")
	})
})
