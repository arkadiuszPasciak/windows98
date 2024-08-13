import { expect, MountResult, test } from "@playwright/experimental-ct-react"
import { CalculatorView } from "../../src/ui/views"

async function performClicks(
	component: MountResult,
	ids: Array<string>,
): Promise<void> {
	for (const id of ids) {
		const button = await component.getByTestId(`ma-calculator-operation-button-${id}`)
		await button.click()
	}
}

test.describe("calculator", () => {
	let component: MountResult

	test.beforeEach(async ({ mount }) => {
		component = await mount(<CalculatorView />)
	})

	test("should perform addition correctly", async () => {
		await performClicks(component, ["2", "+", "3", "="])
		const screen = await component.getByTestId("ma-calculator-screen")
		await expect(screen).toHaveText("5")
	})

	test("should perform subtraction correctly", async () => {
		await performClicks(component, ["5", "-", "2", "="])
		const screen = await component.getByTestId("ma-calculator-screen")
		await expect(screen).toHaveText("3")
	})

	test("should perform multiplication correctly", async () => {
		await performClicks(component, ["3", "*", "4", "="])
		const screen = await component.getByTestId("ma-calculator-screen")
		await expect(screen).toHaveText("12")
	})

	test("should perform division correctly", async () => {
		await performClicks(component, ["8", "/", "2", "="])
		const screen = await component.getByTestId("ma-calculator-screen")
		await expect(screen).toHaveText("4")
	})
})
