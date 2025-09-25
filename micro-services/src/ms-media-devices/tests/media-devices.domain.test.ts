import {
	canvasAPIMock,
	mediaDevicesAPIMock,
	videoAPIMock,
} from "@windows98/web-apis/mocks"
import { describe, expect, it } from "vitest"
import { MSMediaDevices } from "../src/domain/domains"

describe("MSMediaDevices", () => {
	it("requestCameraStream", async () => {
		const testData = {
			id: "mock-stream",
		}

		const streamElementMock = mediaDevicesAPIMock.createMockElement(testData.id)
		mediaDevicesAPIMock.implementMock(streamElementMock)

		const result = await MSMediaDevices.requestCameraStream({ video: true })
		expect(result).toBe(streamElementMock)

		const videoElementMock = videoAPIMock.createMockElement(240, 320)
		videoElementMock.srcObject = streamElementMock

		expect(
			videoElementMock.srcObject,
			"should assign MediaStream to video.srcObject",
		).toBe(streamElementMock)
	})

	it("getSnapshot", async () => {
		const testData = {
			url: "mock-data-url",
			height: 240,
			width: 320,
		}

		const canvasElementMock = canvasAPIMock.createMockElement(testData.url)
		const videoElementMock = videoAPIMock.createMockElement(
			testData.height,
			testData.width,
		)

		canvasAPIMock.implementMock(canvasElementMock)

		const result = await MSMediaDevices.getSnapshot(videoElementMock)
		expect(result).toBe(testData.url)
	})
})
