import { expect, test } from "@playwright/experimental-ct-react"
import { DSTabs } from "./ds-tabs"
import type { DSTabsProps } from "./ds-tabs.type"

const profileTabs: DSTabsProps = {
	id: "profile",
	tabs: [
		{
			id: "overview",
			title: "Overview",
			component: () => <div>Overview Content</div>,
		},
		{
			id: "settings",
			title: "Settings",
			component: () => <div>Settings Content</div>,
		},
	],
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSTabs", () => {
	test("renders correct content for active tab", async ({ mount }) => {
		const component = await mount(
			<DSTabs
				id={profileTabs.id}
				tabs={profileTabs.tabs}
			/>,
		)

		const secondTabButton = component.getByTestId("profile-settings-tab-button")
		secondTabButton.click()

		const secondTabContent = component.getByText("Settings Content")
		expect(secondTabContent).toBeVisible()

		const firstTabButton = component.getByTestId("profile-overview-tab-button")
		firstTabButton.click()

		const overviewContent = component.getByText("Overview Content")
		expect(overviewContent).toBeVisible()
	})
})
