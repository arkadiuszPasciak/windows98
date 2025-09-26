import { describe, expect, it } from "vitest"
import {
	mediaDevicesAPIMock,
	videoAPIMock,
} from "../../../../../@test/vitest/mocks"
import { MediaDevicesAPIRepository } from "../../src/data/repositories"

describe("MediaDevicesAPIRepository", () => {
	const mediaDevicesRepository = new MediaDevicesAPIRepository()

	it("getUserMedia", async () => {
		const testData = {
			id: "mock-stream",
		}

		const streamElementMock = mediaDevicesAPIMock.createMock(testData.id)
		mediaDevicesAPIMock.implementMock(streamElementMock)

		const result = await mediaDevicesRepository.getUserMedia({ video: true })
		expect(result).toBe(streamElementMock)

		const videoElementMock = videoAPIMock.createMock(240, 320)
		videoElementMock.srcObject = streamElementMock

		expect(
			videoElementMock.srcObject,
			"should assign MediaStream to video.srcObject",
		).toBe(streamElementMock)
	})
})
