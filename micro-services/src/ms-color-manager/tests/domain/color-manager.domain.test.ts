import { beforeEach, describe, expect, it, type Mock, vi } from "vitest"
import type {
	ColorConverterStrategyContract,
	RandomColorGeneratorStrategyContract,
} from "../../src/domain/contracts"
import { ColorManagerDomain } from "../../src/domain/domains/color-manager.domain"
import type { RgbColor } from "../../src/domain/models"

const rgbToHexHelper = (rgb: RgbColor): string => {
	const toHex = (value: number) =>
		Math.round(value).toString(16).padStart(2, "0")
	return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`
}

describe("ColorManagerDomain", () => {
	let colorManager: ColorManagerDomain
	let mockColorConverter: ColorConverterStrategyContract
	let mockRandomGenerator: RandomColorGeneratorStrategyContract

	beforeEach(() => {
		mockColorConverter = {
			hexToRgb: vi.fn(),
			rgbToHex: vi.fn(),
		}

		mockRandomGenerator = {
			generateRandomHex: vi.fn(),
		}

		colorManager = new ColorManagerDomain(
			mockColorConverter,
			mockRandomGenerator,
		)
	})

	describe("generateColor", () => {
		it("should generate a color with both hex and rgb values", () => {
			const mockHex = "#ff0000"
			const mockRgb = { r: 255, g: 0, b: 0 }
			;(mockRandomGenerator.generateRandomHex as Mock).mockReturnValue(mockHex)
			;(mockColorConverter.hexToRgb as Mock).mockReturnValue(mockRgb)

			const result = colorManager.generateColor()

			expect(result).toEqual({
				hex: mockHex,
				rgb: mockRgb,
			})
		})

		it("should generate different colors on multiple calls", () => {
			const colors = ["#ff0000", "#00ff00", "#0000ff"]
			const rgbValues = [
				{ r: 255, g: 0, b: 0 },
				{ r: 0, g: 255, b: 0 },
				{ r: 0, g: 0, b: 255 },
			]

			for (const [index, color] of colors.entries()) {
				;(mockRandomGenerator.generateRandomHex as Mock).mockReturnValueOnce(
					color,
				)
				;(mockColorConverter.hexToRgb as Mock).mockReturnValueOnce(
					rgbValues[index],
				)
			}

			const results = [
				colorManager.generateColor(),
				colorManager.generateColor(),
				colorManager.generateColor(),
			]

			expect(results[0]).toEqual({ hex: colors[0], rgb: rgbValues[0] })
			expect(results[1]).toEqual({ hex: colors[1], rgb: rgbValues[1] })
			expect(results[2]).toEqual({ hex: colors[2], rgb: rgbValues[2] })
		})

		it("should work with edge case colors", () => {
			const testCases = [
				{ hex: "#000000", rgb: { r: 0, g: 0, b: 0 } }, // Black
				{ hex: "#ffffff", rgb: { r: 255, g: 255, b: 255 } }, // White
				{ hex: "#ff00ff", rgb: { r: 255, g: 0, b: 255 } }, // Magenta
			]

			for (const testCase of testCases) {
				;(mockRandomGenerator.generateRandomHex as Mock).mockReturnValueOnce(
					testCase.hex,
				)
				;(mockColorConverter.hexToRgb as Mock).mockReturnValueOnce(testCase.rgb)

				const result = colorManager.generateColor()

				expect(result).toEqual({
					hex: testCase.hex,
					rgb: testCase.rgb,
				})
			}
		})

		it("should call random generator to get hex color", () => {
			const mockHex = "#00ff00"
			const mockRgb = { r: 0, g: 255, b: 0 }
			;(mockRandomGenerator.generateRandomHex as Mock).mockReturnValue(mockHex)
			;(mockColorConverter.hexToRgb as Mock).mockReturnValue(mockRgb)

			colorManager.generateColor()

			expect(mockRandomGenerator.generateRandomHex).toHaveBeenCalledTimes(1)
		})

		it("should call color converter to convert hex to rgb", () => {
			const mockHex = "#0000ff"
			const mockRgb = { r: 0, g: 0, b: 255 }
			;(mockRandomGenerator.generateRandomHex as Mock).mockReturnValue(mockHex)
			;(mockColorConverter.hexToRgb as Mock).mockReturnValue(mockRgb)

			colorManager.generateColor()

			expect(mockColorConverter.hexToRgb).toHaveBeenCalledWith(mockHex)
			expect(mockColorConverter.hexToRgb).toHaveBeenCalledTimes(1)
		})
	})

	describe("constructor with default strategies", () => {
		it("should work with default strategies when none provided", () => {
			const defaultColorManager = new ColorManagerDomain()
			const result = defaultColorManager.generateColor()

			expect(result).toHaveProperty("hex")
			expect(result).toHaveProperty("rgb")
			expect(result.hex).toMatch(/^#[0-9a-f]{6}$/)
			expect(result.rgb).toHaveProperty("r")
			expect(result.rgb).toHaveProperty("g")
			expect(result.rgb).toHaveProperty("b")
			expect(result.rgb.r).toBeGreaterThanOrEqual(0)
			expect(result.rgb.r).toBeLessThanOrEqual(255)
			expect(result.rgb.g).toBeGreaterThanOrEqual(0)
			expect(result.rgb.g).toBeLessThanOrEqual(255)
			expect(result.rgb.b).toBeGreaterThanOrEqual(0)
			expect(result.rgb.b).toBeLessThanOrEqual(255)
		})

		it("should generate valid colors consistently with default strategies", () => {
			const defaultColorManager = new ColorManagerDomain()

			for (let i = 0; i < 10; i++) {
				const result = defaultColorManager.generateColor()

				expect(result.hex).toMatch(/^#[0-9a-f]{6}$/)

				expect(result.rgb.r).toBeGreaterThanOrEqual(0)
				expect(result.rgb.r).toBeLessThanOrEqual(255)
				expect(result.rgb.g).toBeGreaterThanOrEqual(0)
				expect(result.rgb.g).toBeLessThanOrEqual(255)
				expect(result.rgb.b).toBeGreaterThanOrEqual(0)
				expect(result.rgb.b).toBeLessThanOrEqual(255)

				const expectedHex = rgbToHexHelper(result.rgb)
				expect(result.hex).toBe(expectedHex)
			}
		})
	})
})
