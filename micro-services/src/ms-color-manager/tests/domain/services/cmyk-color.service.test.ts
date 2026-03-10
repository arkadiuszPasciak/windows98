import { describe, expect, it } from "vitest"
import { CmykColorService } from "../../../src/domain/domains/services"
import type {
	CmykColor,
	ColorType,
	ColorValue,
} from "../../../src/domain/models"

const conversionScenarios: Array<{
	input: CmykColor
	to: Exclude<ColorType, "cmyk">
	expected: ColorValue
}> = [
	{
		input: { c: 0, m: 0, y: 0, k: 0 },
		to: "hex",
		expected: "#ffffff",
	},
	{
		input: { c: 0, m: 0, y: 0, k: 0 },
		to: "hsl",
		expected: { h: 0, s: 0, l: 100 },
	},
	{
		input: { c: 0, m: 0, y: 0, k: 1 },
		to: "hsv",
		expected: { h: 0, s: 0, v: 0 },
	},
	{
		input: { c: 0, m: 1, y: 1, k: 0 },
		to: "rgb",
		expected: { r: 255, g: 0, b: 0 },
	},
]

const formatterScenarios: Array<{ color: CmykColor; expected: string }> = [
	{ color: { c: 0, m: 0, y: 0, k: 0 }, expected: "cmyk(0%, 0%, 0%, 0%)" },
	{
		color: { c: 50, m: 25, y: 75, k: 10 },
		expected: "cmyk(50%, 25%, 75%, 10%)",
	},
	{
		color: { c: 100, m: 100, y: 100, k: 100 },
		expected: "cmyk(100%, 100%, 100%, 100%)",
	},
]

const validationScenarios: Array<{ color: CmykColor; valid: boolean }> = [
	{ color: { c: 0, m: 0, y: 0, k: 0 }, valid: true },
	{ color: { c: 1, m: 1, y: 1, k: 1 }, valid: true },
	{ color: { c: -0.1, m: 0, y: 0, k: 0 }, valid: false },
	{ color: { c: 0, m: 1.1, y: 0, k: 0 }, valid: false },
	{ color: { c: 0, m: 0, y: -1, k: 0 }, valid: false },
	{ color: { c: 0, m: 0, y: 0, k: 2 }, valid: false },
]

describe("CmykColorService", () => {
	const cmykColorService = new CmykColorService()

	conversionScenarios.forEach(({ input, to, expected }) => {
		it(`should convert CMYK ${JSON.stringify(input)} to ${to}`, () => {
			const result = cmykColorService.convert(input, to)
			expect(result).toEqual(expected)
		})
	})

	formatterScenarios.forEach(({ color, expected }) => {
		it(`should format CMYK color ${JSON.stringify(color)} as ${expected}`, () => {
			const formatted = cmykColorService.format(color)
			expect(formatted).toBe(expected)
		})
	})

	validationScenarios.forEach(({ color, valid }) => {
		it(`should validate CMYK color ${JSON.stringify(color)} as ${valid ? "valid" : "invalid"}`, () => {
			expect(cmykColorService.validate(color)).toBe(valid)
		})
	})

	it("should generate a valid CMYK color", () => {
		const generatedColor = cmykColorService.generate()
		expect(cmykColorService.validate(generatedColor)).toBe(true)
	})
})
