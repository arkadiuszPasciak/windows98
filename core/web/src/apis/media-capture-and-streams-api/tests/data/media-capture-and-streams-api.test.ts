import { afterAll, beforeAll, describe, expect, it } from "vitest"
import { mediaCaptureAndStreamsAPIMock } from "../../../../../@test/vitest/mocks"
import { MediaCaptureAndStreamsAPIRepository } from "../../src/data/repositories"

describe("MediaCaptureAndStreamsAPIRepository", () => {
	let mediaCaptureAndStreamsAPIRepository: MediaCaptureAndStreamsAPIRepository

	afterAll(() => {
		mediaCaptureAndStreamsAPIMock.reset()
	})

	beforeAll(() => {
		mediaCaptureAndStreamsAPIMock.implementMock()
		mediaCaptureAndStreamsAPIRepository =
			new MediaCaptureAndStreamsAPIRepository()
	})

	it("should create a new media devices", async () => {
		const mediaDevices =
			mediaCaptureAndStreamsAPIRepository.createNewMediaDevices()

		const devices = await mediaDevices.enumerateDevices()
		expect(devices).toEqual([])

		const displayStream = await mediaDevices.getDisplayMedia()
		expect(displayStream).toEqual("media-stream")

		const stream = await mediaDevices.getUserMedia({ video: true, audio: true })
		expect(stream).toEqual("media-stream")

		const constraints = mediaDevices.getSupportedConstraints()
		const expectedKeys = [
			"width",
			"height",
			"frameRate",
			"aspectRatio",
			"facingMode",
			"sampleRate",
			"sampleSize",
			"echoCancellation",
			"autoGainControl",
			"noiseSuppression",
			"channelCount",
			"deviceId",
			"groupId",
		] as const

		expectedKeys.forEach((key) => {
			expect(constraints).toHaveProperty(key)
			expect(constraints[key as keyof MediaTrackSupportedConstraints]).toBe(
				true,
			)
		})
	})
})
