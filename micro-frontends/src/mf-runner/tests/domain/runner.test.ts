import { describe, expect, it } from "vitest"
import { RunnerDomain } from "../../src/domain/domains"

describe("RunnerDomain", () => {
	const runnerDomain = new RunnerDomain()

	it("setProgramName should set the program name", () => {
		expect(
			runnerDomain.programName,
			"initial default value should be empty",
		).toBe("")

		runnerDomain.setProgramName("Test Program")

		expect(runnerDomain.programName).toBe("Test Program")
	})
})
