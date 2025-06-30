import { expect, test } from "@playwright/experimental-ct-react"
import { MenuItemType, type MenuItems } from "../../src/domain/models"
import { MFStartMenu } from "../../src/ui/views/start-menu"

const programs: MenuItems = [
	{
		type: MenuItemType.PROGRAM,
		id: "settings",
	},
	{
		type: MenuItemType.GROUP,
		id: "programs",
		programs: [
			{
				type: MenuItemType.GROUP,
				id: "accessories",
				programs: [
					{
						type: MenuItemType.PROGRAM,
						id: "calculator",
					},
					{
						type: MenuItemType.PROGRAM,
						id: "notepad",
					},
				],
			},
		],
	},
]

test.describe("Shutdown", () => {
	test("As a user I want to open the calculator from the start menu", async ({
		mount,
	}) => {
		let runProgramId: string | null = null

		const component = await mount(
			<MFStartMenu
				onRunProgram={(program) => {
					runProgramId = program
				}}
				menuItems={programs}
			/>,
		)

		const startButton = component.getByTestId("mf-start-menu-start-button")
		await startButton.click()

		const programsWrapper = component.getByTestId(
			"mf-start-menu-menu-item-programs-wrapper",
		)
		await programsWrapper.hover()

		const accessoriesWrapper = component.getByTestId(
			"mf-start-menu-menu-item-accessories-wrapper",
		)
		await accessoriesWrapper.hover()

		const calculatorWrapper = component.getByTestId(
			"mf-start-menu-menu-item-calculator-wrapper",
		)
		await calculatorWrapper.click()

		expect(runProgramId).toBe("calculator")

		const menu = component.getByTestId(
			"mf-start-menu-menu-items-wrapper-primary",
		)
		expect(
			menu,
			"the start menu is closed after running a program",
		).toBeHidden()
	})
})
