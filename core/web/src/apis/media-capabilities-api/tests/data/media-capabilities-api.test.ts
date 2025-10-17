import { beforeAll, describe, expect, it } from "vitest"
import { mediaCapabilitiesAPIMock } from "../../../../../@test/vitest/mocks"
import { MediaCapabilitiesAPIRepository } from "../../src/data/repositories"

const encodingConfiguration: MediaEncodingConfiguration = {
	type: "record",
	audio: {
		contentType: "audio/webm",
		channels: "1",
		bitrate: 64000,
		samplerate: 22050,
	},
	video: {
		contentType: "video/webm",
		width: 1280,
		height: 720,
		bitrate: 2500000,
		framerate: 24,
	},
}

const decodingConfiguration: MediaDecodingConfiguration = {
	type: "file",
	audio: {
		contentType: "audio/mp3",
		channels: "2",
		bitrate: 128000,
		samplerate: 44100,
	},
	video: {
		contentType: "video/mp4",
		width: 1920,
		height: 1080,
		bitrate: 5000000,
		framerate: 30,
	},
}

describe("MediaCapabilitiesAPIRepository", () => {
	const mediaCapabilitiesAPIRepository = new MediaCapabilitiesAPIRepository()

	beforeAll(() => {
		mediaCapabilitiesAPIMock.implementMock()
	})

	it("should return decoding info for valid configuration", async () => {
		const result = await mediaCapabilitiesAPIRepository.decodingInfo(
			decodingConfiguration,
		)

		expect(result).toBeInstanceOf(Object)
	})

	it("should return encoding info for valid configuration", async () => {
		const result = await mediaCapabilitiesAPIRepository.encodingInfo(
			encodingConfiguration,
		)

		expect(result).toBeInstanceOf(Object)
	})
})
