import { expect, describe, it, beforeEach } from "vitest"
import { CalculatorDomain } from "../../src/domain/domains"

describe("CalculatorDomain", () => {
	let calculatorDomain: CalculatorDomain

	beforeEach(() => {
		calculatorDomain = new CalculatorDomain()
	})

	describe("addNumber", () => {
		it("should add a number to the initial value", () => {
			calculatorDomain.addNumber(5)
			expect(calculatorDomain.value).toBe("5")
		})

		it("should append a number to the existing value", () => {
			calculatorDomain.value = "1"
			calculatorDomain.addNumber(2)
			expect(calculatorDomain.value).toBe("12")
		})
	})

	describe("addDot", () => {
		it("should add a dot if no dot exists", () => {
			calculatorDomain.value = "123"
			calculatorDomain.addDot()
			expect(calculatorDomain.value).toBe("123.")
		})

		it("should not add a dot if a dot already exists", () => {
			calculatorDomain.value = "123."
			calculatorDomain.addDot()
			expect(calculatorDomain.value).toBe("123.")
		})
	})

	describe("addSign", () => {
		it("should add a mathematical sign to the value", () => {
			calculatorDomain.value = "123"
			calculatorDomain.addSign("+")
			expect(calculatorDomain.value).toBe("123+")
		})

		it("should not add a sign if the last character is a sign", () => {
			calculatorDomain.value = "123+"
			calculatorDomain.addSign("-")
			expect(calculatorDomain.value).toBe("123+")
		})
	})

	describe("summResult", () => {
		it("should calculate the result of the mathematical expression", () => {
			calculatorDomain.value = "1+2"
			calculatorDomain.summResult()
			expect(calculatorDomain.value).toBe("3")
		})
	})
})
