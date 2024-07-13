import { expect, test } from "@playwright/experimental-ct-react"
import { CalculatorView } from "../../src/ui/views"

test.describe("wrapper", () => {
	test("show wrapper", async ({ mount }) => {
		const component = await mount(<CalculatorView />)
		const wrapper = await component.getByTestId("ma-calculator-wrapper")

		await expect(wrapper).toBeTruthy()
	})
})
