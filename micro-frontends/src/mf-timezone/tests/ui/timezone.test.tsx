import { expect, test } from "@playwright/experimental-ct-react"
import { TimezoneView } from "../../src/ui/views"

test.describe("Timezone", () => {
	test("should follow a typical user scenario", async ({ mount }) => {
		const component = await mount(<TimezoneView />)
		await expect(component, "Component has rendered correct").toBeVisible()

		const frame = await component.getByTestId("ds-text-frame-timezone")
		await expect(frame, "Frame has rendered correct").toBeVisible()

		const select = await component.getByTestId(
			"ds-select-select-timezone-switcher",
		)

		await select.selectOption("GMT+1 Central European Time (CET)")
		await expect(select, "User has selected CET").toHaveValue(String(1))
	})
})
