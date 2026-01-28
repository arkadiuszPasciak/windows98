import { describe, expect, it, vi } from "vitest"
import { SoundRecorderDomain } from "../../src/domain/domains"

vi.mock("@windows98/micro-services", () => ({
	MSFileManager: {
		downloadFile: vi.fn(() => Promise.resolve()),
	},
	MSAudioManager: {
		startRecording: vi.fn(() => Promise.resolve()),
		stopRecording: vi.fn(() => Promise.resolve()),
	},
}))

vi.mock("@windows98/toolkit", () => ({
	dataURLToFile: vi.fn(
		(_dataURL: string, fileName: string) => new File([], fileName),
	),
}))

describe("SoundRecorderDomain", () => {
	const domain: SoundRecorderDomain = new SoundRecorderDomain()

	it("should start recording, stop recording, and download sound", async () => {
		expect(domain.recordingState, "should be idle").toBe("idle")

		await domain.startRecording()
		expect(domain.recordingState, "should be recording").toBe("recording")

		await domain.stopRecording()
		expect(domain.recordingState, "should be stopped").toBe("stopped")
		expect(
			domain.recordedSoundFile,
			"should have recorded sound file",
		).not.toBe(null)

		await domain.downloadRecordedSound()

		domain.reset()
		expect(domain.recordingState, "should be idle after reset").toBe("idle")
		expect(domain.recordedSoundFile, "should have no recorded sound file").toBe(
			null,
		)
	})
})
