import { describe, expect, it } from "vitest"
import { MSColorManager } from "../../src/domain/domains"

describe("ColorManagerDomain", () => {
	const msColorManager = MSColorManager

	describe("generateColor", () => {
		it("should generate a color with both hex and rgb values", () => {
			const result = msColorManager.generateColor()

			expect(result).toEqual({
				cmyk: expect.objectContaining({
					c: expect.any(Number),
					m: expect.any(Number),
					y: expect.any(Number),
					k: expect.any(Number),
				}),
				hex: expect.stringMatching(/^#[0-9a-f]{6}$/),
				hsl: expect.objectContaining({
					h: expect.any(Number),
					s: expect.any(Number),
					l: expect.any(Number),
				}),
				hsv: expect.objectContaining({
					h: expect.any(Number),
					s: expect.any(Number),
					v: expect.any(Number),
				}),
				rgb: expect.objectContaining({
					r: expect.any(Number),
					g: expect.any(Number),
					b: expect.any(Number),
				}),
			})
		})
	})

	describe("validateColor", () => {
		it("should validate a correct hex color", () => {
			const isValid = msColorManager.validateColor("hex", "#ff5733")
			expect(isValid).toBe(true)
		})

		it("should invalidate an incorrect hex color", () => {
			const isValid = msColorManager.validateColor("hex", "ff5733")
			expect(isValid).toBe(false)
		})

		it("should validate a correct rgb color", () => {
			const isValid = msColorManager.validateColor("rgb", {
				r: 255,
				g: 87,
				b: 51,
			})
			expect(isValid).toBe(true)
		})

		it("should invalidate an incorrect rgb color", () => {
			const isValid = msColorManager.validateColor("rgb", {
				r: 300,
				g: -10,
				b: 51,
			})
			expect(isValid).toBe(false)
		})
	})
})
