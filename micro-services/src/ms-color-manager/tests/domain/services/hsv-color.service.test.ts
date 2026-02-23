import { describe, expect, it } from "vitest"
import { HsvColorService } from "../../../src/domain/domains/services/hsv-color.service"
import type { ColorValue, HsvColor } from "../../../src/domain/models"

const conversionScenarios: Array<{
	input: HsvColor
	to: "rgb" | "cmyk" | "hex" | "hsl"
	expected: ColorValue
}> = [
	{
		input: { h: 0, s: 0, v: 100 },
		to: "rgb",
		expected: { r: 255, g: 255, b: 255 },
	},
	{ input: { h: 0, s: 0, v: 0 }, to: "rgb", expected: { r: 0, g: 0, b: 0 } },
	{
		input: { h: 0, s: 100, v: 100 },
		to: "rgb",
		expected: { r: 255, g: 0, b: 0 },
	},
	{
		input: { h: 120, s: 100, v: 100 },
		to: "rgb",
		expected: { r: 0, g: 255, b: 0 },
	},
	{
		input: { h: 240, s: 100, v: 100 },
		to: "rgb",
		expected: { r: 0, g: 0, b: 255 },
	},
	{ input: { h: 0, s: 0, v: 100 }, to: "hex", expected: "#ffffff" },
	{ input: { h: 0, s: 0, v: 0 }, to: "hex", expected: "#000000" },
]

const validationScenarios: Array<{
	color: HsvColor | null | undefined
	valid: boolean
}> = [
	{ color: { h: 0, s: 0, v: 0 }, valid: true },
	{ color: { h: 360, s: 100, v: 100 }, valid: true },
	{ color: { h: 180, s: 50, v: 50 }, valid: true },
	{ color: { h: -1, s: 0, v: 0 }, valid: false },
	{ color: { h: 0, s: 101, v: 0 }, valid: false },
	{ color: { h: 0, s: 0, v: 101 }, valid: false },
	{ color: null, valid: false },
	{ color: undefined, valid: false },
]

describe("HsvColorService", () => {
	const hsvColorService = new HsvColorService()

	conversionScenarios.forEach(({ input, to, expected }) => {
		it(`should convert HSV ${JSON.stringify(input)} to ${to}`, () => {
			const result = hsvColorService.convert(input, to)
			expect(result).toEqual(expected)
		})
	})

	validationScenarios.forEach(({ color, valid }) => {
		it(`should validate HSV color ${JSON.stringify(color)} as ${valid ? "valid" : "invalid"}`, () => {
			expect(hsvColorService.validate(color as HsvColor)).toBe(valid)
		})
	})

	it("should generate a valid HSV color", () => {
		const generatedColor = hsvColorService.generate()
		expect(hsvColorService.validate(generatedColor)).toBe(true)
	})
})
