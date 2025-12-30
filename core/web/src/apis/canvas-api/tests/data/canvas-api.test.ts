import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { canvasAPIMock, videoAPIMock } from "../../../../../@test/vitest/mocks"
import { CanvasAPIRepository } from "../../src/data/repositories"

const testData = {
	url: "mock-data-url",
	height: 240,
	width: 320,
	format: "image/png",
	quality: 0.8,
}

describe("CanvasAPIRepository", () => {
	const canvasRepository = new CanvasAPIRepository()

	beforeEach(() => {
		const canvasElementMock = canvasAPIMock.createMock(testData.url)
		canvasAPIMock.implementMock(canvasElementMock)
	})

	afterEach(() => {
		vi.resetAllMocks()
	})

	it("getSnapshot", async () => {
		const videoElementMock = videoAPIMock.createMock(
			testData.height,
			testData.width,
		)

		const result = await canvasRepository.getSnapshot(videoElementMock)
		expect(result).toBe(testData.url)
	})

	it("createCanvas", () => {
		const canvas = canvasRepository.createCanvas(
			testData.width,
			testData.height,
		)

		expect(canvas.width).toBe(testData.width)
		expect(canvas.height).toBe(testData.height)
	})

	it("convertCanvas", () => {
		const canvas = canvasRepository.createCanvas(
			testData.width,
			testData.height,
		)

		const dataUrl = canvasRepository.convertCanvas(
			canvas,
			testData.format,
			testData.quality,
		)
		expect(typeof dataUrl).toBe("string")
		expect(dataUrl.startsWith(`mock-data-url`)).toBe(true)
	})
})
