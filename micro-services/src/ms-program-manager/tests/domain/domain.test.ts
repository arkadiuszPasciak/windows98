import { afterEach, describe, expect, it, vi } from "vitest"
import { ProgramManagerDomain } from "../../src/domain/domains"

interface TestPrograms {
	calculator: boolean
	"tic-tac-toe": boolean
}

describe("ProgramManagerDomain", () => {
	afterEach(() => {
		vi.restoreAllMocks()
	})

	describe("runProgram", () => {
		const programManager = ProgramManagerDomain.getInstance<TestPrograms>({
			calculator: false,
			"tic-tac-toe": false,
		})

		it("should update the calculator program", () => {
			programManager.runProgram("calculator", true)
			expect(programManager.programs.calculator).toBe(true)
		})

		it("should update the tic tac toe program", () => {
			programManager.runProgram("tic-tac-toe", true)
			expect(programManager.programs["tic-tac-toe"]).toBe(true)
		})
	})
})
