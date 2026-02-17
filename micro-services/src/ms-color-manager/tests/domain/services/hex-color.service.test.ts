import { describe, expect, it } from "vitest"
import { HexColorService } from "../../../src/domain/domains/services/hex-color.service"
import type { ColorValue, HexColor } from "../../../src/domain/models"

const conversionScenarios: Array<{
	input: HexColor
	to: "rgb" | "cmyk" | "hsl" | "hsv"
	expected: ColorValue
}> = [
	{ input: "#ffffff", to: "rgb", expected: { r: 255, g: 255, b: 255 } },
	{ input: "#000000", to: "rgb", expected: { r: 0, g: 0, b: 0 } },
	{ input: "#ff0000", to: "cmyk", expected: { c: 0, m: 1, y: 1, k: 0 } },
	{ input: "#00ff00", to: "cmyk", expected: { c: 1, m: 0, y: 1, k: 0 } },
	{ input: "#0000ff", to: "cmyk", expected: { c: 1, m: 1, y: 0, k: 0 } },
	{ input: "#ffffff", to: "hsl", expected: { h: 0, s: 0, l: 100 } },
	{ input: "#000000", to: "hsv", expected: { h: 0, s: 0, v: 0 } },
]

const validationScenarios: Array<{
	color: HexColor | null | undefined
	valid: boolean
}> = [
	{ color: "#ffffff", valid: true },
	{ color: "#FFF", valid: true },
	{ color: "#000000", valid: true },
	{ color: "#123abc", valid: true },
	{ color: "#123", valid: true },
	{ color: "#12", valid: false },
	{ color: "#12345g", valid: false },
	{ color: "123456", valid: false },
	{ color: null, valid: false },
	{ color: undefined, valid: false },
]

describe("HexColorService", () => {
	const hexColorService = new HexColorService()

	conversionScenarios.forEach(({ input, to, expected }) => {
		it(`should convert HEX ${input} to ${to}`, () => {
			const result = hexColorService.convert(input, to)
			expect(result).toEqual(expected)
		})
	})

	validationScenarios.forEach(({ color, valid }) => {
		it(`should validate HEX color ${JSON.stringify(color)} as ${valid ? "valid" : "invalid"}`, () => {
			expect(hexColorService.validate(color as HexColor)).toBe(valid)
		})
	})
})
