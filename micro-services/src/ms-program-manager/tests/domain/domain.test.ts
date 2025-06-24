import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ProgramManagerDomain } from "../../src/domain/domains"

interface TestPrograms {
	calculator: boolean
	"tic-tac-toe": boolean
}

describe("ProgramManagerDomain", () => {
	afterEach(() => {
		vi.restoreAllMocks()
	})

	describe("observerHelper", () => {
		let programManager: ProgramManagerDomain<TestPrograms>

		beforeEach(() => {
			programManager = new ProgramManagerDomain<TestPrograms>({
				calculator: false,
				"tic-tac-toe": false,
			})
		})

		it("should notify observers when programs change", () => {
			const observerCallback = vi.fn()
			programManager.observerHelper.subscribe(observerCallback)

			programManager.runProgram("calculator", true)

			expect(observerCallback).toHaveBeenCalledTimes(1)
			expect(observerCallback).toHaveBeenCalledWith(
				{ calculator: true, "tic-tac-toe": false },
				{ calculator: false, "tic-tac-toe": false },
			)
		})

		it("should not notify observers if the program value does not change", () => {
			const observerCallback = vi.fn()
			programManager.observerHelper.subscribe(observerCallback)

			programManager.runProgram("calculator", false)

			expect(observerCallback).not.toHaveBeenCalled()
		})
	})
})
