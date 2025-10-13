import { beforeAll, describe, expect, it } from "vitest"
import { mediaStreamImageCaptureAPIMock } from "/Users/wilhelm-neumann/Documents/projects/windows98/core/web/@test/vitest/mocks/media-stream-image-capture-api.mock"
import { MediaStreamImageCaptureAPIRepository } from "../../src/data/repositories"

describe("MediaStreamImageCaptureAPIRepository", () => {
	const repository: MediaStreamImageCaptureAPIRepository =
		new MediaStreamImageCaptureAPIRepository()

	beforeAll(() => {
		mediaStreamImageCaptureAPIMock.implementMock()
	})

	it("should enumerate devices", async () => {
		const devices = await repository.enumerateDevices()
		expect(devices).toBeInstanceOf(Array)
		expect(devices.length).toBeGreaterThan(0)
	})

	it("should get display media", async () => {
		const stream = await repository.getDisplayMedia()
		expect(stream).toBeInstanceOf(MediaStream)
	})

	it("should get supported constraints", () => {
		const constraints = repository.getSupportedConstraints()
		expect(constraints).toHaveProperty("width")
	})

	it("should get user media", async () => {
		const stream = await repository.getUserMedia()
		expect(stream).toBeInstanceOf(MediaStream)
	})

	it("should create ImageCapture from track", () => {
		const videoTrack = new MediaStreamTrack()
		const imageCapture = repository.createImageCaptureFromTrack(videoTrack)
		expect(imageCapture).toBeInstanceOf(ImageCapture)
	})
})
