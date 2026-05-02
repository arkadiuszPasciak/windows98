import { beforeEach, describe, expect, it } from "vitest"
import { CalculatorDomain } from "../../src/domain/domains"

describe("CalculatorDomain", () => {
	let calculatorDomain: CalculatorDomain

	beforeEach(() => {
		calculatorDomain = new CalculatorDomain()
	})

	describe("add", () => {
		it("should add a number to the empty operation", () => {
			calculatorDomain.add(5)
			expect(calculatorDomain.currentOperation).toBe("5")
		})

		it("should append a number to the existing operation", () => {
			calculatorDomain.add(1)
			calculatorDomain.add(2)
			expect(calculatorDomain.currentOperation).toBe("12")
		})

		it("should append a sign to the existing operation", () => {
			calculatorDomain.add(1)
			calculatorDomain.add("+")
			expect(calculatorDomain.currentOperation).toBe("1+")
		})

		it("should append a dot to the existing operation", () => {
			calculatorDomain.add(1)
			calculatorDomain.add(".")
			expect(calculatorDomain.currentOperation).toBe("1.")
		})
	})

	describe("clear", () => {
		it("should clear the current operation", () => {
			calculatorDomain.add(5)
			calculatorDomain.clear()
			expect(calculatorDomain.currentOperation).toBe("")
		})
	})

	describe("equal", () => {
		it("should calculate the result of the mathematical expression", () => {
			calculatorDomain.add(1)
			calculatorDomain.add("+")
			calculatorDomain.add(2)
			calculatorDomain.equal()
			expect(calculatorDomain.currentOperation).toBe("3")
		})
	})

	describe("remove", () => {
		it("should remove the last character from the operation", () => {
			calculatorDomain.add(1)
			calculatorDomain.add(2)
			calculatorDomain.remove()
			expect(calculatorDomain.currentOperation).toBe("1")
		})

		it("should result in an empty operation when removing from a single character", () => {
			calculatorDomain.add(5)
			calculatorDomain.remove()
			expect(calculatorDomain.currentOperation).toBe("")
		})
	})

	describe("validate", () => {
		it("should return true for a valid operation", () => {
			calculatorDomain.add(1)
			calculatorDomain.add("+")
			calculatorDomain.add(2)
			expect(calculatorDomain.validate()).toBe(true)
		})

		it("should return an error type for an empty operation", () => {
			expect(calculatorDomain.validate()).toBe("empty_operation")
		})

		it("should return an error type for a trailing operator", () => {
			calculatorDomain.add(1)
			calculatorDomain.add("+")
			expect(calculatorDomain.validate()).toBe("trailing_operator")
		})
	})
})
