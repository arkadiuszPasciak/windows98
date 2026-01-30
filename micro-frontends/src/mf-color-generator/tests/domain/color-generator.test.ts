import { beforeEach, describe, expect, it } from "vitest"
import { ColorGeneratorDomain } from "../../src/domain/domains/color-generator.domain"

describe("ColorGeneratorDomain", () => {
	let domain: ColorGeneratorDomain

	beforeEach(() => {
		domain = new ColorGeneratorDomain()
	})

	it("should initialize with a random color", () => {
		expect(domain.currentColor).toBeDefined()
		expect(domain.currentColor.rgb).toBeDefined()
		expect(domain.currentColor.hex).toBeDefined()
		expect(domain.currentColor.hex).toMatch(/^#[0-9a-f]{6}$/)
		expect(domain.currentColor.rgb.r).toBeGreaterThanOrEqual(0)
		expect(domain.currentColor.rgb.r).toBeLessThanOrEqual(255)
		expect(domain.currentColor.rgb.g).toBeGreaterThanOrEqual(0)
		expect(domain.currentColor.rgb.g).toBeLessThanOrEqual(255)
		expect(domain.currentColor.rgb.b).toBeGreaterThanOrEqual(0)
		expect(domain.currentColor.rgb.b).toBeLessThanOrEqual(255)
	})

	it("should generate different colors when generateRandomColor is called", () => {
		const initialColor = { ...domain.currentColor }

		domain.generateRandomColor()
		const firstNewColor = { ...domain.currentColor }

		domain.generateRandomColor()
		const secondNewColor = { ...domain.currentColor }

		domain.generateRandomColor()
		const thirdNewColor = { ...domain.currentColor }

		expect(firstNewColor).not.toEqual(initialColor)
		expect(secondNewColor).not.toEqual(firstNewColor)
		expect(thirdNewColor).not.toEqual(secondNewColor)

		expect(firstNewColor.hex).toMatch(/^#[0-9a-f]{6}$/)
		expect(secondNewColor.hex).toMatch(/^#[0-9a-f]{6}$/)
		expect(thirdNewColor.hex).toMatch(/^#[0-9a-f]{6}$/)
	})
})
