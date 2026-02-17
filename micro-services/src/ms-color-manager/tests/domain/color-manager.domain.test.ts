import { describe, expect, it } from "vitest"
import { MSColorManager } from "../../src/domain/domains"

describe("ColorManagerDomain", () => {
	const msColorManager = MSColorManager

	describe("generateColor", () => {
		it("should generate a color with both hex and rgb values", () => {
			const result = msColorManager.generateColor()

			expect(result).toEqual({
				hex: expect.stringMatching(/^#[0-9a-f]{6}$/),
				rgb: expect.objectContaining({
					r: expect.any(Number),
					g: expect.any(Number),
					b: expect.any(Number),
				}),
			})
		})
	})
})
