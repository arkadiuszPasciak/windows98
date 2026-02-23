import { describe, expect, it } from "vitest"
import { HslColorService } from "../../../src/domain/domains/services/hsl-color.service"
import type { ColorValue, HslColor } from "../../../src/domain/models"

const conversionScenarios: Array<{
	input: HslColor
	to: "rgb" | "cmyk" | "hex" | "hsv"
	expected: ColorValue
}> = [
	{
		input: { h: 0, s: 0, l: 100 },
		to: "rgb",
		expected: { r: 255, g: 255, b: 255 },
	},
	{ input: { h: 0, s: 0, l: 0 }, to: "rgb", expected: { r: 0, g: 0, b: 0 } },
	{
		input: { h: 0, s: 100, l: 50 },
		to: "rgb",
		expected: { r: 255, g: 0, b: 0 },
	},
	{
		input: { h: 120, s: 100, l: 50 },
		to: "rgb",
		expected: { r: 0, g: 255, b: 0 },
	},
	{
		input: { h: 240, s: 100, l: 50 },
		to: "rgb",
		expected: { r: 0, g: 0, b: 255 },
	},
	{ input: { h: 0, s: 0, l: 100 }, to: "hex", expected: "#ffffff" },
	{ input: { h: 0, s: 0, l: 0 }, to: "hex", expected: "#000000" },
]

const validationScenarios: Array<{
	color: HslColor | null | undefined
	valid: boolean
}> = [
	{ color: { h: 0, s: 0, l: 0 }, valid: true },
	{ color: { h: 360, s: 100, l: 100 }, valid: true },
	{ color: { h: 180, s: 50, l: 50 }, valid: true },
	{ color: { h: -1, s: 0, l: 0 }, valid: false },
	{ color: { h: 0, s: 101, l: 0 }, valid: false },
	{ color: { h: 0, s: 0, l: 101 }, valid: false },
	{ color: null, valid: false },
	{ color: undefined, valid: false },
]

describe("HslColorService", () => {
	const hslColorService = new HslColorService()

	conversionScenarios.forEach(({ input, to, expected }) => {
		it(`should convert HSL ${JSON.stringify(input)} to ${to}`, () => {
			const result = hslColorService.convert(input, to)
			expect(result).toEqual(expected)
		})
	})

	validationScenarios.forEach(({ color, valid }) => {
		it(`should validate HSL color ${JSON.stringify(color)} as ${valid ? "valid" : "invalid"}`, () => {
			expect(hslColorService.validate(color as HslColor)).toBe(valid)
		})
	})

	it("should generate a valid HSL color", () => {
		const generatedColor = hslColorService.generate()
		expect(hslColorService.validate(generatedColor)).toBe(true)
	})
})
