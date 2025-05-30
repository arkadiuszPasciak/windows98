import { beforeEach, describe, expect, it } from "vitest"
import { RunnerDomain } from "../../src/domain/domains"
import type { Programs } from "../../src/domain/models"

const programs: Programs<string> = [
	{ settings: ["settings", "ustawienia"] },
	{ notepad: ["notepad", "edytor"] },
]

describe("RunnerDomain", () => {
	let runnerDomain: RunnerDomain

	beforeEach(() => {
		runnerDomain = new RunnerDomain()
	})

	it("setProgramName should set the program name", () => {
		expect(
			runnerDomain.programName,
			"initial default value should be empty",
		).toBe("")

		runnerDomain.setProgramName("Test Program")
		expect(runnerDomain.programName).toBe("Test Program")
	})

	it("runProgram should run the selected program", () => {
		runnerDomain.setProgramName("Settings")

		const result = runnerDomain.runProgram(programs)
		expect(result).toBe("settings")

		expect(runnerDomain.programName).toBe("")
	})
})
