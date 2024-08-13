import { expect, test } from "@playwright/experimental-ct-react"
import { CalculatorView } from "../../src/ui/views"

const operationButtons = [
	{
		id: "0",
	},
	{
		id: "1",
	},
	{
		id: "2",
	},
	{
		id: "3",
	},
	{
		id: "4",
	},
	{
		id: "5",
	},
	{
		id: "6",
	},
	{
		id: "7",
	},
	{
		id: "8",
	},
	{
		id: "9",
	},
	{
		id: "0",
	},
	{
		id: "+",
	},
	{
		id: "-",
	},
	{
		id: "*",
	},
	{
		id: "/",
	},
	{
		id: "=",
	},
]

test.describe("operation button", () => {
	test("show operation buttons", async ({ mount }) => {
		const component = await mount(<CalculatorView />)

		for (let index = 0; index <= (operationButtons.length - 1); index++) {
			const button = await component.getByTestId(`ma-calculator-operation-button-${operationButtons[index].id}`)
			expect(button).toHaveText(String(operationButtons[index].id))
		}
	})
})
