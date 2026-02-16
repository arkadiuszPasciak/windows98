import { describe, expect, it } from "vitest"
import { RgbColorService } from "../../../src/domain/domains/services/rgb-color.service"
import type {
	CmykColor,
	HexColor,
	HslColor,
	HsvColor,
	RgbColor,
} from "../../../src/domain/models"

const conversionScenarios: Array<{
	input: RgbColor
	to: "cmyk" | "hex" | "hsl" | "hsv"
	expected: CmykColor | HexColor | HslColor | HsvColor
}> = [
	{
		input: { r: 255, g: 255, b: 255 },
		to: "hex",
		expected: "#ffffff",
	},
	{
		input: { r: 255, g: 255, b: 255 },
		to: "hsl",
		expected: { h: 0, s: 0, l: 100 },
	},
	{
		input: { r: 0, g: 0, b: 0 },
		to: "hsv",
		expected: { h: 0, s: 0, v: 0 },
	},
	{
		input: { r: 255, g: 0, b: 0 },
		to: "cmyk",
		expected: { c: 0, m: 1, y: 1, k: 0 },
	},
	{
		input: { r: 0, g: 255, b: 0 },
		to: "cmyk",
		expected: { c: 1, m: 0, y: 1, k: 0 },
	},
	{
		input: { r: 0, g: 0, b: 255 },
		to: "cmyk",
		expected: { c: 1, m: 1, y: 0, k: 0 },
	},
]

const validationScenarios: Array<{
	color: RgbColor | null | undefined
	valid: boolean
}> = [
	{ color: { r: 0, g: 0, b: 0 }, valid: true },
	{ color: { r: 255, g: 255, b: 255 }, valid: true },
	{ color: { r: 128, g: 128, b: 128 }, valid: true },
	{ color: { r: -1, g: 0, b: 0 }, valid: false },
	{ color: { r: 0, g: 256, b: 0 }, valid: false },
	{ color: { r: 0, g: 0, b: 300 }, valid: false },
	{ color: null, valid: false },
	{ color: undefined, valid: false },
]

describe("RgbColorService", () => {
	const rgbColorService = new RgbColorService()

	conversionScenarios.forEach(({ input, to, expected }) => {
		it(`should convert RGB ${JSON.stringify(input)} to ${to}`, () => {
			const result = rgbColorService.convert(input, to)
			expect(result).toEqual(expected)
		})
	})

	validationScenarios.forEach(({ color, valid }) => {
		it(`should validate RGB color ${JSON.stringify(color)} as ${valid ? "valid" : "invalid"}`, () => {
			expect(rgbColorService.validate(color as RgbColor)).toBe(valid)
		})
	})
})
