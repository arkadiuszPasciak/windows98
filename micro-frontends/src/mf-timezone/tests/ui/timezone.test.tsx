import { expect, test } from "@playwright/experimental-ct-react"
import { TimezoneView } from "../../src/ui/views"

test.describe("Timezone", () => {
	test("should follow a typical user scenario", async ({ mount }) => {
		const component = await mount(<TimezoneView />)
		await expect(component, "Component has rendered correct").toBeVisible()

		await expect(component, "Frame has rendered correct").toHaveAttribute(
			"data-testid",
			"timezone-frame",
		)

		const select = component.getByTestId("timezone-switcher-select-select")

		// Wait for the select to be visible first
		await expect(select, "Select has rendered correct").toBeVisible()

		await select.selectOption("1")
		await expect(select, "User has selected CET").toHaveValue(String(1))
	})
})
