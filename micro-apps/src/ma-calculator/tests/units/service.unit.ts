import { expect, describe, test } from "vitest"
import { CalculatorService } from "../../src/domain/services/calculator.service"

describe("CalculatorService", () => {
	const calculatorService = new CalculatorService()

	describe("isDotExist", () => {
		test("initial state", () => {
			expect(calculatorService.isDotExist("")).toBe(false)
			expect(calculatorService.isDotExist("12345")).toBe(false)
		})

		test("with dot", () => {
			expect(calculatorService.isDotExist("123.45")).toBe(true)
		})
	})

	describe("isMathematicalSignLast", () => {
		test("initial state", () => {
			expect(calculatorService.isMathematicalSignLast("")).toBe(false)
			expect(calculatorService.isMathematicalSignLast("1234$")).toBe(false)
		})

		test("with mathematical sign last", () => {
			expect(calculatorService.isMathematicalSignLast("1234+")).toBe(true)
			expect(calculatorService.isMathematicalSignLast("1234/")).toBe(true)
			expect(calculatorService.isMathematicalSignLast("1234-")).toBe(true)
			expect(calculatorService.isMathematicalSignLast("1234*")).toBe(true)
		})
	})

	describe("summResult", () => {
		test("initial state", () => {
			expect(calculatorService.summResult("")).toBe("ERROR")
			expect(calculatorService.summResult("abcde")).toBe("ERROR")
			expect(calculatorService.summResult("!@^)(\"")).toBe("ERROR")
		})

		test("valid mathematical expression", () => {
			expect(calculatorService.summResult("1+2-5*8/2")).toBe("-17")
		})
	})

	describe("isMathematicalOperation", () => {
		test("initial state", () => {
			expect(calculatorService.isMathematicalOperation("")).toBe(false)
			expect(calculatorService.isMathematicalOperation("abcde")).toBe(false)
			expect(calculatorService.isMathematicalOperation("!@^)(\"")).toBe(false)
		})

		test("valid mathematical expression", () => {
			expect(calculatorService.isMathematicalOperation("1+2-5*8/2")).toBe(true)
		})
	})
})
