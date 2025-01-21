import { expect, test } from "@playwright/experimental-ct-react"
import { DSHeading } from "./ds-heading"
import type { DSHeadingType } from "./ds-heading.type"

const headingTypes: Array<DSHeadingType> = ["h1", "h2", "h3", "h4", "h5", "h6"]

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSHeading", () => {
	for (const type of headingTypes) {
		test(`renders ${type} properly`, async ({ mount }) => {
			const component = await mount(
				<DSHeading
					id={`test-${type}`}
					text={`Heading ${type}`}
					type={type}
				/>,
			)

			await expect(component).toBeVisible()
			await expect(component).toHaveText(`Heading ${type}`)
			await expect(component).toHaveAttribute(
				"data-testid",
				`test-${type}-heading`,
			)
		})
	}
})
