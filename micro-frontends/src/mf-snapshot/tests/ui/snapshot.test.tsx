import { expect, test } from "@playwright/experimental-ct-react"
import { MFSnapshotForTest } from "./snapshot.story"

test.describe("MFSnapshot", () => {
	test("captures snapshot and shows it in gallery", async ({ mount }) => {
		const component = await mount(<MFSnapshotForTest />)

		const button = component.getByTestId("mf-snapshot-capture-photo-button")
		await button.click()

		await expect(component.getByTestId("mf-snapshot-gallery")).toBeVisible()
		await expect(
			component.locator('[data-testid="mf-snapshot-photo"] > img'),
		).toBeVisible()
	})
})
