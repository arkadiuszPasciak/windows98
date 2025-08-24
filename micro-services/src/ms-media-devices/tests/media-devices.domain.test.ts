import { beforeAll, describe, expect, it, vi } from "vitest"
import { MSMediaDevices } from "../src/domain/domains"

function ensureNavigatorMediaDevicesMocked() {
	if (!globalThis.navigator) {
		// @ts-expect-error
		globalThis.navigator = {}
	}
	if (!navigator.mediaDevices) {
		// @ts-expect-error
		navigator.mediaDevices = {}
	}
	if (!navigator.mediaDevices.enumerateDevices) {
		navigator.mediaDevices.enumerateDevices = vi.fn()
	}
	if (!navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia = vi.fn()
	}
	if (!("ondevicechange" in navigator.mediaDevices)) {
		// @ts-expect-error
		navigator.mediaDevices.ondevicechange = null
	}
}

const mediaStreamMock: MediaStream = {
	id: "mock-stream",
	active: true,
	addTrack: vi.fn(),
	removeTrack: vi.fn(),
	getTracks: vi.fn(() => []),
	getAudioTracks: vi.fn(() => []),
	getVideoTracks: vi.fn(() => []),
	getTrackById: vi.fn(),
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
	dispatchEvent: vi.fn(),
	onaddtrack: null,
	onremovetrack: null,
	clone: vi.fn(() => ({}) as MediaStream),
	stop: vi.fn(),
} as MediaStream

describe("MSMediaDevices", () => {
	beforeAll(() => {
		ensureNavigatorMediaDevicesMocked()
	})

	it("requestCameraStream", async () => {
		const stream = mediaStreamMock
		vi.spyOn(navigator.mediaDevices, "getUserMedia").mockResolvedValue(stream)
		const result = await MSMediaDevices.requestCameraStream({ video: true })
		expect(result).toBe(stream)

		const video: HTMLVideoElement = document.createElement("video")
		video.srcObject = stream
		expect(
			video.srcObject,
			"should assign MediaStream to video.srcObject",
		).toBe(stream)
	})

	it("getSnapshot", async () => {
		const video = document.createElement("video")
		video.width = 320
		video.height = 240

		Object.defineProperty(video, "videoWidth", { value: 320 })
		Object.defineProperty(video, "videoHeight", { value: 240 })

		const canvasMock = document.createElement("canvas")
		vi.spyOn(document, "createElement").mockImplementation((tag) => {
			if (tag === "canvas") return canvasMock
			return document.createElement(tag)
		})

		const drawImageMock = vi.fn()
		canvasMock.getContext = vi.fn().mockReturnValue({
			drawImage: drawImageMock,
			...canvasMock.getContext("2d"),
		})

		const dataUrl = "data:image/png;base64,mock"
		canvasMock.toDataURL = vi.fn().mockReturnValue(dataUrl)

		const result = await MSMediaDevices.getSnapshot(video)
		expect(drawImageMock).toHaveBeenCalledWith(video, 0, 0, 320, 240)
		expect(result).toBe(dataUrl)
	})
})
