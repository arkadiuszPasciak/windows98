import { describe, expect, it } from "vitest"
import type { Numbers, Operation, Sign } from "../../src/domain"
import { MSMathematics } from "../../src/domain/domains"

const sings: Sign[] = ["+", "-", "*", "/", ".", "="]
const numbers: Numbers[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const addScenarios: Array<{
	currentOperation: Operation
	value: Numbers | Sign
	result: Operation
	message: string
}> = [
	...sings.map((sign) => ({
		currentOperation: "5",
		value: sign,
		result: `5${sign}`,
		message: `adding sign "${sign}"`,
	})),
	...numbers.map((num) => ({
		currentOperation: "5",
		value: num,
		result: `5${num}`,
		message: `adding number ${num}`,
	})),
]

const equalScenarios: Array<{
	currentOperation: Operation
	result: Operation
	message: string
}> = [
	{ currentOperation: "2+2", result: "4", message: "simple addition" },
	{ currentOperation: "10-3", result: "7", message: "simple subtraction" },
	{ currentOperation: "3*4", result: "12", message: "simple multiplication" },
	{ currentOperation: "10/2", result: "5", message: "simple division" },
	{
		currentOperation: "2+3*4",
		result: "14",
		message: "multiplication before addition",
	},
	{
		currentOperation: "10-6/2",
		result: "7",
		message: "division before subtraction",
	},
	{
		currentOperation: "(2+3)*4",
		result: "20",
		message: "parentheses over multiplication",
	},
	{
		currentOperation: "((2+3)*2)+1",
		result: "11",
		message: "nested parentheses",
	},
	{ currentOperation: "1.5+1.5", result: "3", message: "decimal numbers" },
	{ currentOperation: "-5+3", result: "-2", message: "negative numbers" },
	{ currentOperation: "2+3+4+5", result: "14", message: "chained operations" },
	{
		currentOperation: "2+3*4-6/2",
		result: "11",
		message: "mixed operations with correct order",
	},
]

const invalidScenarios: Array<{
	currentOperation: Operation
	result: string
	message: string
}> = [
	{
		currentOperation: "",
		result: "empty_operation",
		message: "empty operation",
	},
	{
		currentOperation: "   ",
		result: "empty_operation",
		message: "whitespace-only operation",
	},
	{
		currentOperation: "2+a",
		result: "invalid_character",
		message: "letter in operation",
	},
	{
		currentOperation: "2+%",
		result: "invalid_character",
		message: "special character in operation",
	},
	{
		currentOperation: "2++3",
		result: "consecutive_operators",
		message: "consecutive plus operators",
	},
	{
		currentOperation: "2*/3",
		result: "consecutive_operators",
		message: "consecutive multiply and divide operators",
	},
	{
		currentOperation: "2*-3",
		result: "consecutive_operators",
		message: "consecutive multiply and minus operators",
	},
	{
		currentOperation: "+2+3",
		result: "invalid_leading_operator",
		message: "leading plus operator",
	},
	{
		currentOperation: "*2+3",
		result: "invalid_leading_operator",
		message: "leading multiply operator",
	},
	{
		currentOperation: "/2+3",
		result: "invalid_leading_operator",
		message: "leading divide operator",
	},
	{
		currentOperation: "1..2+3",
		result: "invalid_character",
		message: "dot in expression (not in allowed character set)",
	},
	{
		currentOperation: "(2+3",
		result: "invalid_character",
		message: "opening parenthesis (not in allowed character set)",
	},
	{
		currentOperation: "2+3)",
		result: "invalid_character",
		message: "closing parenthesis (not in allowed character set)",
	},
	{
		currentOperation: "2+3+",
		result: "trailing_operator",
		message: "trailing plus operator",
	},
	{
		currentOperation: "2*3-",
		result: "trailing_operator",
		message: "trailing minus operator",
	},
	{
		currentOperation: "2*3*",
		result: "trailing_operator",
		message: "trailing multiply operator",
	},
	{
		currentOperation: "2+3/",
		result: "trailing_operator",
		message: "trailing divide operator",
	},
]

const validScenarios: Array<{
	currentOperation: Operation
	message: string
}> = [
	{ currentOperation: "1+2", message: "simple addition" },
	{ currentOperation: "10-3", message: "simple subtraction" },
	{ currentOperation: "3*4", message: "simple multiplication" },
	{ currentOperation: "10/2", message: "simple division" },
	{ currentOperation: "-5+3", message: "negative leading number" },
	{ currentOperation: "2+3*4-6/2", message: "mixed operations" },
	{ currentOperation: "100", message: "single number" },
	{ currentOperation: "9876543210", message: "all allowed digits" },
]

describe("MathematicsDomain", () => {
	const msMathematics = MSMathematics

	describe("add", () => {
		it.each(addScenarios)("should add $message", ({
			currentOperation,
			value,
			result,
		}) => {
			expect(msMathematics.add(currentOperation, value as Numbers | Sign)).toBe(
				result,
			)
		})
	})

	describe("clear", () => {
		it("should clear operation", () => {
			expect(msMathematics.clear()).toBe("")
		})
	})

	describe("equal", () => {
		it.each(equalScenarios)("should equal $message", ({
			currentOperation,
			result,
		}) => {
			expect(msMathematics.equal(currentOperation)).toBe(result)
		})
	})

	describe("remove", () => {
		it("should remove last character from operation", () => {
			expect(msMathematics.remove("123")).toBe("12")

			expect(msMathematics.remove("1")).toBe("")

			expect(msMathematics.remove("")).toBe("")
		})
	})

	describe("validate", () => {
		it.each(validScenarios)("should return true for $message", ({
			currentOperation,
		}) => {
			expect(msMathematics.validate(currentOperation)).toBe(true)
		})

		it.each(invalidScenarios)("should return '$result' for $message", ({
			currentOperation,
			result,
		}) => {
			expect(msMathematics.validate(currentOperation)).toBe(result)
		})
	})
})
