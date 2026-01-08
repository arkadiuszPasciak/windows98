import {
	canvasAPIMock,
	mediaStreamImageCaptureAPIMock,
	videoAPIMock,
} from "@windows98/web/mocks"
import { describe, expect, it } from "vitest"
import { MSVideoManager } from "../../src/domain/domains"

describe("MSVideoManager", () => {
	it("requestCameraStream", async () => {
		mediaStreamImageCaptureAPIMock.implementMock()

		const result = await MSVideoManager.requestCameraStream({ video: true })
		expect(result).toBeInstanceOf(MediaStream)

		const videoElementMock = videoAPIMock.createMock(240, 320)
		videoElementMock.srcObject = result

		expect(
			videoElementMock.srcObject,
			"should assign MediaStream to video.srcObject",
		).toBe(result)
	})

	it("getSnapshot", async () => {
		const testData = {
			url: "mock-data-url",
			height: 240,
			width: 320,
			format: "image/png",
			quality: 0.8,
		}

		const videoElementMock = videoAPIMock.createMock(
			testData.height,
			testData.width,
		)

		canvasAPIMock.implementMock()

		const result = await MSVideoManager.getSnapshot(videoElementMock)
		expect(
			result.startsWith(`data:${testData.format};base64,MOCKED_DATA_URL`),
		).toBe(true)
	})
})
