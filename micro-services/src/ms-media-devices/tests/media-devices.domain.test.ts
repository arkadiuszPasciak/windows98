import {
	canvasAPIMock,
	mediaStreamImageCaptureAPIMock,
	videoAPIMock,
} from "@windows98/web/mocks"
import { describe, expect, it } from "vitest"
import { MSMediaDevices } from "../src/domain/domains"

describe("MSMediaDevices", () => {
	it("requestCameraStream", async () => {
		mediaStreamImageCaptureAPIMock.implementMock()

		const result = await MSMediaDevices.requestCameraStream({ video: true })
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
		}

		const canvasElementMock = canvasAPIMock.createMock(testData.url)
		const videoElementMock = videoAPIMock.createMock(
			testData.height,
			testData.width,
		)

		canvasAPIMock.implementMock(canvasElementMock)

		const result = await MSMediaDevices.getSnapshot(videoElementMock)
		expect(result).toBe(testData.url)
	})
})
