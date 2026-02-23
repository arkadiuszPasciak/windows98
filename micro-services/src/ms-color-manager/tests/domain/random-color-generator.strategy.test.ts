import { beforeEach, describe, expect, it } from "vitest"
import { RandomColorGeneratorStrategy } from "../../src/domain/domains/strategies/random-color-generator.strategy"

describe("RandomColorGeneratorStrategy", () => {
	let randomColorGenerator: RandomColorGeneratorStrategy

	beforeEach(() => {
		randomColorGenerator = new RandomColorGeneratorStrategy()
	})

	describe("generateRandomHex", () => {
		it("should generate a valid hex color", () => {
			const result = randomColorGenerator.generateRandomHex()
			expect(result).toMatch(/^#[0-9a-f]{6}$/)
		})

		it("should generate different colors on multiple calls", () => {
			const colors = new Set()
			const iterations = 100

			for (let i = 0; i < iterations; i++) {
				colors.add(randomColorGenerator.generateRandomHex())
			}

			expect(colors.size).toBeGreaterThan(iterations * 0.5)
		})

		it("should always start with #", () => {
			for (let i = 0; i < 10; i++) {
				const result = randomColorGenerator.generateRandomHex()
				expect(result.charAt(0)).toBe("#")
			}
		})

		it("should always be 7 characters long", () => {
			for (let i = 0; i < 10; i++) {
				const result = randomColorGenerator.generateRandomHex()
				expect(result.length).toBe(7)
			}
		})

		it("should generate valid hex characters only", () => {
			const validHexChars = /^[0-9a-f]+$/

			for (let i = 0; i < 10; i++) {
				const result = randomColorGenerator.generateRandomHex()
				const hexPart = result.substring(1) // Remove the #
				expect(hexPart).toMatch(validHexChars)
			}
		})

		it("should cover the full color spectrum over many iterations", () => {
			const colors = []
			const iterations = 1000

			for (let i = 0; i < iterations; i++) {
				colors.push(randomColorGenerator.generateRandomHex())
			}

			const rgbValues = colors.map((hex) => {
				const cleanHex = hex.replace("#", "")
				return {
					r: Number.parseInt(cleanHex.substring(0, 2), 16),
					g: Number.parseInt(cleanHex.substring(2, 4), 16),
					b: Number.parseInt(cleanHex.substring(4, 6), 16),
				}
			})

			const rValues = rgbValues.map((rgb) => rgb.r)
			const gValues = rgbValues.map((rgb) => rgb.g)
			const bValues = rgbValues.map((rgb) => rgb.b)

			const rRange = Math.max(...rValues) - Math.min(...rValues)
			const gRange = Math.max(...gValues) - Math.min(...gValues)
			const bRange = Math.max(...bValues) - Math.min(...bValues)

			expect(rRange).toBeGreaterThan(100)
			expect(gRange).toBeGreaterThan(100)
			expect(bRange).toBeGreaterThan(100)
		})
	})
})
