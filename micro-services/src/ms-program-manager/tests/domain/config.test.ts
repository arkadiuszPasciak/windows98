import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ProgramManagerDomain } from "../../src/domain/domains"

interface TestPrograms {
	calculator: boolean
	"tic-tac-toe": boolean
}

describe("ProgramManagerDomain", () => {
	let programManagerDomain: ProgramManagerDomain<TestPrograms>

	beforeEach(() => {
		const defaultPrograms: TestPrograms = {
			calculator: false,
			"tic-tac-toe": false,
		}

		programManagerDomain = ProgramManagerDomain.getInstance(defaultPrograms)
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("getInstance should return a singleton instance", () => {
		const instance1 = ProgramManagerDomain.getInstance({
			calculator: false,
			"tic-tac-toe": false,
		})

		const instance2 = ProgramManagerDomain.getInstance({
			calculator: true,
			"tic-tac-toe": true,
		})

		expect(instance1).toBe(instance2)
		expect(instance1.programs.calculator).toBe(false)
		expect(instance1.programs["tic-tac-toe"]).toBe(false)
	})

	it("set should update the calculator", () => {
		programManagerDomain.set("calculator", true)

		expect(programManagerDomain.programs.calculator).toBe(true)
	})

	it("set should update the tic tac toe", () => {
		programManagerDomain.set("tic-tac-toe", true)

		expect(programManagerDomain.programs["tic-tac-toe"]).toBe(true)
	})
})
