import { describe, expect, it } from "vitest"
import { MSColorManager } from "../../src/domain/domains"

describe("ColorManagerDomain", () => {
	const msColorManager = MSColorManager

	describe("generateColor", () => {
		it("should generate colors values", () => {
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

	describe("formatColor", () => {
		it("should format a cmyk color correctly", () => {
			const formatted = msColorManager.formatColor("cmyk", {
				c: 0,
				m: 66,
				y: 80,
				k: 0,
			})
			expect(formatted).toBe("cmyk(0%, 66%, 80%, 0%)")
		})

		it("should format a hex color correctly", () => {
			const formatted = msColorManager.formatColor("hex", "#ff5733")
			expect(formatted).toBe("#ff5733")
		})

		it("should format an hsl color correctly", () => {
			const formatted = msColorManager.formatColor("hsl", {
				h: 9,
				s: 100,
				l: 60,
			})
			expect(formatted).toBe("hsl(9, 100%, 60%)")
		})

		it("should format a hsv color correctly", () => {
			const formatted = msColorManager.formatColor("hsv", {
				h: 9,
				s: 100,
				v: 100,
			})
			expect(formatted).toBe("hsv(9, 100%, 100%)")
		})

		it("should format an rgb color correctly", () => {
			const formatted = msColorManager.formatColor("rgb", {
				r: 255,
				g: 87,
				b: 51,
			})
			expect(formatted).toBe("rgb(255, 87, 51)")
		})
	})
})
