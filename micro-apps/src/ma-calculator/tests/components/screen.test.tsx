import { expect, test } from "@playwright/experimental-ct-react"
import { CalculatorView } from "../../src/ui/views"

test("show screen", async ({ mount }) => {
	const component = await mount(<CalculatorView />)
	const screen = await component.getByTestId("ma-calculator-screen")

	await expect(screen).toHaveText("0")
})
