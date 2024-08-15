import { describe, expect, it } from "vitest"
import { addZeroBeforeNumber } from "./add-zero-before-number.util"

describe("addZeroBeforeNumber", () => {
	it("should add a zero before the number if it is less than the max number", () => {
		const number = 5
		const maxNumber = 10
		const result = addZeroBeforeNumber(number, maxNumber)
		expect(result).to.equal("05")
	})

	it("should return the number as a string if it is equal to or greater than the max number", () => {
		const number = 15
		const maxNumber = 10
		const result = addZeroBeforeNumber(number, maxNumber)
		expect(result).to.equal("15")
	})
})
