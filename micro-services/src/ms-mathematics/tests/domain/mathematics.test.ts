import { describe, expect, it } from "vitest"
import { MSMathematics } from "../../src/domain/domains"

describe("MathematicsDomain", () => {
	const msMathematics = MSMathematics

	describe("clear", () => {
		it("should clear operation", () => {
			expect(msMathematics.clear()).toBe("")
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
