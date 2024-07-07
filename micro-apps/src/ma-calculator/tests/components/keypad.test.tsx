import { expect, test } from "@playwright/experimental-ct-react"
import { CalculatorView } from "../../src/ui/views"

test("show keypad", async ({ mount }) => {
	const component = await mount(<CalculatorView />)
	const keypad = await component.getByTestId("ma-calculator-keypad")

	await expect(keypad).toBeTruthy()
})
