import { describe, expect, it } from "vitest"
import { MSMathematics } from "../../src/domain/domains"

describe("MathematicsDomain", () => {
	const msMathematics = MSMathematics

	describe("clear", () => {
		it(`should clear operation`, () => {
			expect(msMathematics.clear()).toBe("")
		})
	})
})
