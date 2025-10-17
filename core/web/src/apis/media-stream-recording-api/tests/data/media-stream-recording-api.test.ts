import { beforeAll, describe, expect, it } from "vitest"
import {
	mediaStreamImageCaptureAPIMock,
	mediaStreamRecordingAPIMock,
} from "../../../../../@test/vitest/mocks"
import { MediaStreamRecordingAPIRepository } from "../../src/data/repositories"

describe("MediaStreamRecordingAPIRepository", () => {
	const mediaStreamRecordingAPIRepository =
		new MediaStreamRecordingAPIRepository()

	beforeAll(() => {
		mediaStreamImageCaptureAPIMock.implementMock()
		mediaStreamRecordingAPIMock.implementMock()
	})

	it("should create a new MediaRecorder", () => {
		const mockStream = new MediaStream()
		const mediaStream =
			mediaStreamRecordingAPIRepository.createMediaRecorder(mockStream)
		expect(mediaStream).toBeInstanceOf(MediaRecorder)
	})
})
