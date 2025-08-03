import { expect, test } from "@playwright/experimental-ct-react"
import { NavigationView } from "../../src/ui/views"

test.describe("Navigation", () => {
	test("should render wrapper", async ({ mount }) => {
		const component = await mount(<NavigationView>children</NavigationView>)

		await expect(component).toHaveAttribute(
			"data-testid",
			"mf-navigation-wrapper",
		)
	})
})
