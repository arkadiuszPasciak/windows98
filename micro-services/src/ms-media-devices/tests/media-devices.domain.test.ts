import { canvasAPIMock, videoAPIMock } from "@windows98/web-apis/mocks"
import { describe, expect, it, vi } from "vitest"
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
	it("requestCameraStream", async () => {
		ensureNavigatorMediaDevicesMocked()

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
