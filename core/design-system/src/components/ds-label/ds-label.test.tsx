import { expect, test } from "@playwright/experimental-ct-react"
import { DSLabel, type DSLabelProps } from "./index"

const defaultLabel: DSLabelProps = {
	id: "test-label",
	text: "Test Label",
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSLabel", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(
			<DSLabel
				id={defaultLabel.id}
				text={defaultLabel.text}
			/>,
		)

		await expect(component).toBeVisible()
		await expect(component).toHaveText(defaultLabel.text)
		await expect(component).toHaveAttribute(
			"data-testid",
			`${defaultLabel.id}-label`,
		)
		await expect(component).toHaveAttribute("for", defaultLabel.id)
	})
})
