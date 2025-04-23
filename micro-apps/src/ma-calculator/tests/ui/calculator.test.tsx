import {
	type MountResult,
	expect,
	test,
} from "@playwright/experimental-ct-react"
import { CalculatorView } from "../../src/ui/views"

async function performClicks(
	component: MountResult,
	ids: Array<string>,
): Promise<void> {
	for (const id of ids) {
		const button = await component.getByTestId(
			`ma-calculator-operation-button-${id}`,
		)
		await button.click()
	}
}

test.describe("Calculator E2E Tests", () => {
	let component: MountResult

	test.beforeEach(async ({ mount }) => {
		component = await mount(<CalculatorView />)
	})

	test("As a user, I can add two numbers and see the result", async () => {
		await performClicks(component, ["7", "+", "3", "="])
		const screen = component.getByTestId("ma-calculator-screen")
		await expect(screen).toHaveText("10")
	})

	test("As a user, I can subtract one number from another and see the result", async () => {
		await performClicks(component, ["9", "-", "4", "="])
		const screen = component.getByTestId("ma-calculator-screen")
		await expect(screen).toHaveText("5")
	})

	test("As a user, I can multiply two numbers and see the result", async () => {
		await performClicks(component, ["6", "*", "7", "="])
		const screen = component.getByTestId("ma-calculator-screen")
		await expect(screen).toHaveText("42")
	})

	test("As a user, I can divide one number by another and see the result", async () => {
		await performClicks(component, ["8", "/", "2", "="])
		const screen = component.getByTestId("ma-calculator-screen")
		await expect(screen).toHaveText("4")
	})
})
