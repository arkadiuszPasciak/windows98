import { canvasAPIMock } from "@windows98/web/mocks"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import type { ImageFormat, ImageQuality } from "../../src/domain"
import { ImageManagerDomain } from "../../src/domain/domains"

const testData = {
	url: "mock-data-url",
	height: 240,
	width: 320,
	format: "image/png" as ImageFormat,
	quality: 0.8 as ImageQuality,
}

describe("ImageManagerDomain", () => {
	let ImageManager: ImageManagerDomain

	beforeEach(() => {
		ImageManager = new ImageManagerDomain()

		canvasAPIMock.implementMock()
	})

	afterEach(() => {
		vi.clearAllMocks()
	})

	it("should convert an image", () => {
		const canvasElement = document.createElement("canvas")

		const convertedImage = ImageManager.convertImage(
			canvasElement,
			testData.format,
			testData.quality,
		)

		expect(
			convertedImage.startsWith(
				`data:${testData.format};base64,MOCKED_DATA_URL`,
			),
		).toBe(true)
	})
})
