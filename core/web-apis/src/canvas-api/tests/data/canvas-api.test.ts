import { describe, expect, it } from "vitest"
import { canvasAPIMock, videoAPIMock } from "../../../../@test/vitest/mocks"
import { CanvasAPIRepository } from "../../src/data/repositories"

describe("CanvasAPIRepository", () => {
	const canvasRepository = new CanvasAPIRepository()

	it("getSnapshot", async () => {
		const testData = {
			url: "mock-data-url",
			height: 240,
			width: 320,
		}

		const canvasElementMock = canvasAPIMock.createMock(testData.url)
		const videoElementMock = videoAPIMock.createMock(
			testData.height,
			testData.width,
		)

		canvasAPIMock.implementMock(canvasElementMock)

		const result = await canvasRepository.getSnapshot(videoElementMock)
		expect(result).toBe(testData.url)
	})
})
