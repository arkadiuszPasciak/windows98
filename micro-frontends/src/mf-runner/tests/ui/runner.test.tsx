import { expect, test } from "@playwright/experimental-ct-react"
import { MFRunner } from "../../src/ui/views/runner"

test.describe("Runner", () => {
	test("As a user, I want to run a program", async ({ mount }) => {
		let isProgramRunning = false
		let isProgramClosed = false

		const onRunProgram = () => {
			isProgramRunning = true
		}
		const onCloseProgram = () => {
			isProgramClosed = true
		}

		const component = await mount(
			<MFRunner
				onCloseProgram={onCloseProgram}
				onRunProgram={onRunProgram}
				programs={[
					{ settings: ["settings", "ustawienia"] },
					{ notepad: ["notepad", "edytor"] },
				]}
			/>,
		)

		const input = component.getByTestId("mf-runner-input-input-input")
		const okButton = component.getByTestId("mf-runner-controller-ok-button")

		await expect(
			okButton,
			"Button OK is selected, if input is empty",
		).toBeDisabled()

		await input.fill("settings")
		await okButton.click()

		expect(isProgramRunning, "Selected program is running").toBe(true)
		expect(isProgramClosed, "Runner is closed").toBe(true)
	})
})
