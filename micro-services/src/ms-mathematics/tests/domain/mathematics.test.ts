import { describe, expect, it } from "vitest"
import type { Numbers, Operation, Sign } from "../../src/domain"
import { MSMathematics } from "../../src/domain/domains"

const addScenarios: Array<{
	currentOperation: Operation
	value: Numbers | Sign
	result: Operation
	message: string
}> = [
	...["+", "-", "*", "/", ".", "="].map((sign) => ({
		currentOperation: "5" as Operation,
		value: sign as Sign,
		result: `5${sign}` as Operation,
		message: `adding sign "${sign}"`,
	})),
	...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
		currentOperation: "5" as Operation,
		value: num as Numbers,
		result: `5${num}` as Operation,
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
})
