import { beforeEach, describe, expect, it } from "vitest"
import { ColorConverterStrategy } from "../../src/domain/domains/strategies/color-converter.strategy"

describe("ColorConverterStrategy", () => {
	let colorConverter: ColorConverterStrategy

	beforeEach(() => {
		colorConverter = new ColorConverterStrategy()
	})

	describe("hexToRgb", () => {
		it("should convert hex color to RGB correctly", () => {
			const result = colorConverter.hexToRgb("#ff0000")
			expect(result).toEqual({ r: 255, g: 0, b: 0 })
		})

		it("should convert hex color without # to RGB correctly", () => {
			const result = colorConverter.hexToRgb("00ff00")
			expect(result).toEqual({ r: 0, g: 255, b: 0 })
		})

		it("should convert lowercase hex color to RGB correctly", () => {
			const result = colorConverter.hexToRgb("#0000ff")
			expect(result).toEqual({ r: 0, g: 0, b: 255 })
		})

		it("should convert mixed case hex color to RGB correctly", () => {
			const result = colorConverter.hexToRgb("#FfA500")
			expect(result).toEqual({ r: 255, g: 165, b: 0 })
		})

		it("should handle black color correctly", () => {
			const result = colorConverter.hexToRgb("#000000")
			expect(result).toEqual({ r: 0, g: 0, b: 0 })
		})

		it("should handle white color correctly", () => {
			const result = colorConverter.hexToRgb("#ffffff")
			expect(result).toEqual({ r: 255, g: 255, b: 255 })
		})

		it("should throw error for invalid hex format", () => {
			expect(() => colorConverter.hexToRgb("#gg0000")).toThrow(
				"Invalid hex color format: #gg0000",
			)
		})

		it("should throw error for short hex format", () => {
			expect(() => colorConverter.hexToRgb("#fff")).toThrow(
				"Invalid hex color format: #fff",
			)
		})

		it("should throw error for long hex format", () => {
			expect(() => colorConverter.hexToRgb("#ffffff00")).toThrow(
				"Invalid hex color format: #ffffff00",
			)
		})
	})

	describe("rgbToHex", () => {
		it("should convert RGB to hex color correctly", () => {
			const result = colorConverter.rgbToHex({ r: 255, g: 0, b: 0 })
			expect(result).toBe("#ff0000")
		})

		it("should convert RGB with low values to hex correctly", () => {
			const result = colorConverter.rgbToHex({ r: 15, g: 15, b: 15 })
			expect(result).toBe("#0f0f0f")
		})

		it("should convert black RGB to hex correctly", () => {
			const result = colorConverter.rgbToHex({ r: 0, g: 0, b: 0 })
			expect(result).toBe("#000000")
		})

		it("should convert white RGB to hex correctly", () => {
			const result = colorConverter.rgbToHex({ r: 255, g: 255, b: 255 })
			expect(result).toBe("#ffffff")
		})

		it("should handle decimal values by rounding", () => {
			const result = colorConverter.rgbToHex({ r: 255.7, g: 165.3, b: 0.1 })
			expect(result).toBe("#ffa500")
		})

		it("should throw error for negative RGB values", () => {
			expect(() => colorConverter.rgbToHex({ r: -1, g: 0, b: 0 })).toThrow(
				"Invalid RGB values: r=-1, g=0, b=0",
			)
		})

		it("should throw error for RGB values above 255", () => {
			expect(() => colorConverter.rgbToHex({ r: 256, g: 0, b: 0 })).toThrow(
				"Invalid RGB values: r=256, g=0, b=0",
			)
		})

		it("should throw error for multiple invalid RGB values", () => {
			expect(() => colorConverter.rgbToHex({ r: 300, g: -50, b: 400 })).toThrow(
				"Invalid RGB values: r=300, g=-50, b=400",
			)
		})
	})

	describe("hexToRgb and rgbToHex integration", () => {
		it("should be reversible operations", () => {
			const originalHex = "#ff6600"
			const rgb = colorConverter.hexToRgb(originalHex)
			const convertedHex = colorConverter.rgbToHex(rgb)
			expect(convertedHex).toBe(originalHex)
		})

		it("should handle multiple round trips", () => {
			const colors = [
				"#ff0000",
				"#00ff00",
				"#0000ff",
				"#ffffff",
				"#000000",
				"#ffaa33",
			]

			for (const color of colors) {
				const rgb = colorConverter.hexToRgb(color)
				const hex = colorConverter.rgbToHex(rgb)
				expect(hex).toBe(color)
			}
		})
	})
})
