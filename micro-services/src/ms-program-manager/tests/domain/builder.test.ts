import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ProgramManagerBuilder } from "../../src/domain/builders"

interface TestPrograms {
	calculator: boolean
	"tic-tac-toe": boolean
}

describe("ProgramManagerBuilder", () => {
	let builder: ProgramManagerBuilder<TestPrograms>

	beforeEach(() => {
		builder = new ProgramManagerBuilder<TestPrograms>({
			calculator: false,
			"tic-tac-toe": false,
		})
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("build should return a correct programs", () => {
		builder.add("calculator", false)
		builder.add("tic-tac-toe", false)

		const programs = builder.build()

		expect(programs).toEqual({
			calculator: false,
			"tic-tac-toe": false,
		})
	})
})
