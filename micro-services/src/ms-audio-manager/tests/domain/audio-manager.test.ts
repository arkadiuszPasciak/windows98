import {
	mediaCaptureAndStreamsAPIMock,
	mediaStreamRecordingAPIMock,
} from "@windows98/web/mocks"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { MSAudioManager } from "../../src/domain/domains"

describe("MSAudioManager", () => {
	beforeEach(() => {
		mediaCaptureAndStreamsAPIMock.implementMock()
		mediaStreamRecordingAPIMock.implementMock()
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("should start and stop recording", async () => {
		await MSAudioManager.startRecording()

		const audioFile = await MSAudioManager.stopRecording()

		expect(audioFile).toBeInstanceOf(File)
		expect(audioFile.type).toBe("audio/webm")
	})
})
