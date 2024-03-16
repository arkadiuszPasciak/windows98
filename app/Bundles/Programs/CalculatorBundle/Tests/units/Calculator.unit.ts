import { expect, it, describe } from "vitest"
import { Calculator } from "@APP|Bundles/CalculatorBundle/Services/Calculator.services"

const CalculatorService = new Calculator()

describe("[CalculatorBundle]<Services>(isDotExist)", () => {
	it("should return false", () => {
		expect(CalculatorService.isDotExist("")).toBe(false)

		expect(CalculatorService.isDotExist("12345")).toBe(false)
	})

	it("should return true", () => {
		expect(CalculatorService.isDotExist("123.45")).toBe(true)
	})
})

describe("[CalculatorBundle]<Services>(isMathematicalSignLast)", () => {
	it("should return false", () => {
		expect(CalculatorService.isMathematicalSignLast("")).toBe(false)

		expect(CalculatorService.isMathematicalSignLast("1234$")).toBe(false)
	})

	it("should return true", () => {
		expect(CalculatorService.isMathematicalSignLast("1234+")).toBe(true)

		expect(CalculatorService.isMathematicalSignLast("1234/")).toBe(true)

		expect(CalculatorService.isMathematicalSignLast("1234-")).toBe(true)

		expect(CalculatorService.isMathematicalSignLast("1234*")).toBe(true)
	})
})

describe("[CalculatorBundle]<Services>(summingResult)", () => {
	it("should return false", () => {
		expect(CalculatorService.summingResult("")).toBe("ERROR")

		expect(CalculatorService.summingResult("abcde")).toBe("ERROR")

		expect(CalculatorService.summingResult("!@^)(\"")).toBe("ERROR")
	})

	it("should return true", () => {
		expect(CalculatorService.summingResult("1+2-5*8/2")).toBe("-17")
	})
})

describe("[CalculatorBundle]<Services>(isMathematicalOperation)", () => {
	it("should return false", () => {
		expect(CalculatorService.isMathematicalOperation("")).toBe(false)

		expect(CalculatorService.isMathematicalOperation("abcde")).toBe(false)

		expect(CalculatorService.isMathematicalOperation("!@^)(\"")).toBe(false)
	})

	it("should return true", () => {
		expect(CalculatorService.isMathematicalOperation("1+2-5*8/2")).toBe(true)
	})
})
