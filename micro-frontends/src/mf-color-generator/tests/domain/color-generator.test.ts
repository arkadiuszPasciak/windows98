import { beforeEach, describe, expect, it, vi } from "vitest"
import { ColorGeneratorDomain } from "../../src/domain/domains/color-generator.domain"

vi.mock("@windows98/micro-services", async (importOriginal) => {
	const actual =
		await importOriginal<typeof import("@windows98/micro-services")>()
	return {
		...actual,
		MSClipboard: {
			copyText: vi.fn().mockResolvedValue(undefined),
		},
	}
})

describe("ColorGeneratorDomain", () => {
	let domain: ColorGeneratorDomain

	beforeEach(() => {
		domain = new ColorGeneratorDomain()
		vi.clearAllMocks()
	})

	it("should initialize with default black values", () => {
		expect(domain.currentColor.cmyk).toEqual({ c: 0, m: 0, y: 0, k: 0 })
		expect(domain.currentColor.hex).toBe("#000000")
		expect(domain.currentColor.hsl).toEqual({ h: 0, s: 0, l: 0 })
		expect(domain.currentColor.hsv).toEqual({ h: 0, s: 0, v: 0 })
		expect(domain.currentColor.rgb).toEqual({ r: 0, g: 0, b: 0 })

		expect(domain.formattedColor.cmyk).toBe("cmyk(0%, 0%, 0%, 0%)")
		expect(domain.formattedColor.hex).toBe("#000000")
		expect(domain.formattedColor.hsl).toBe("hsl(0, 0%, 0%)")
		expect(domain.formattedColor.hsv).toBe("hsv(0, 0%, 0%)")
		expect(domain.formattedColor.rgb).toBe("rgb(0, 0, 0)")
	})

	it("should generate different colors when generateRandomColor is called", () => {
		const initialColor = { ...domain.currentColor }
		const initialFormatted = { ...domain.formattedColor }

		domain.generateRandomColor()
		const firstNewColor = { ...domain.currentColor }
		const firstFormatted = { ...domain.formattedColor }

		domain.generateRandomColor()
		const secondNewColor = { ...domain.currentColor }

		domain.generateRandomColor()
		const thirdNewColor = { ...domain.currentColor }

		expect(firstNewColor).not.toEqual(initialColor)
		expect(firstFormatted).not.toEqual(initialFormatted)
		expect(secondNewColor).not.toEqual(firstNewColor)
		expect(thirdNewColor).not.toEqual(secondNewColor)

		expect(firstNewColor.hex).toMatch(/^#[0-9a-f]{6}$/)
		expect(secondNewColor.hex).toMatch(/^#[0-9a-f]{6}$/)
		expect(thirdNewColor.hex).toMatch(/^#[0-9a-f]{6}$/)

		expect(firstNewColor.rgb).toHaveProperty("r")
		expect(firstNewColor.rgb).toHaveProperty("g")
		expect(firstNewColor.rgb).toHaveProperty("b")
		expect(firstNewColor.cmyk).toHaveProperty("c")
		expect(firstNewColor.cmyk).toHaveProperty("m")
		expect(firstNewColor.cmyk).toHaveProperty("y")
		expect(firstNewColor.cmyk).toHaveProperty("k")
		expect(firstNewColor.hsl).toHaveProperty("h")
		expect(firstNewColor.hsl).toHaveProperty("s")
		expect(firstNewColor.hsl).toHaveProperty("l")
		expect(firstNewColor.hsv).toHaveProperty("h")
		expect(firstNewColor.hsv).toHaveProperty("s")
		expect(firstNewColor.hsv).toHaveProperty("v")
	})

	it("should copy the formatted color value for the given type", async () => {
		const { MSClipboard } = await import("@windows98/micro-services")

		await domain.copyColor("hex")
		expect(MSClipboard.copyText).toHaveBeenCalledWith(domain.formattedColor.hex)

		await domain.copyColor("rgb")
		expect(MSClipboard.copyText).toHaveBeenCalledWith(domain.formattedColor.rgb)

		await domain.copyColor("cmyk")
		expect(MSClipboard.copyText).toHaveBeenCalledWith(
			domain.formattedColor.cmyk,
		)

		await domain.copyColor("hsl")
		expect(MSClipboard.copyText).toHaveBeenCalledWith(domain.formattedColor.hsl)

		await domain.copyColor("hsv")
		expect(MSClipboard.copyText).toHaveBeenCalledWith(domain.formattedColor.hsv)
	})
})
