import { expect, test } from "@playwright/experimental-ct-react"
import { NavigationView } from "../../src/ui/views"

test.describe("Navigation", () => {
	test("should render wrapper", async ({ mount }) => {
		const component = await mount(<NavigationView>children</NavigationView>)
		const navigationWrapper = component.getByTestId("mf-navigation-wrapper")

		expect(navigationWrapper).toBeVisible()
		expect(navigationWrapper.textContent()).toBe("children")
	})
})
