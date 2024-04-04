import { expect, test } from "@playwright/experimental-ct-react"
import { TimezoneView } from "../../src/ui/views/timezone.view"

test.describe("[ma-timezone]: timezone", () => {
	test("choose central european time", async ({ mount }) => {
		const component = await mount(<TimezoneView />)
		const select = await component.getByTestId("ds-select-select-timezone-switcher")

		await select.selectOption("GMT+1 Central European Time (CET)")
		await expect(select).toHaveValue(String(1))
	})
})
