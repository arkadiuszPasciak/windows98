import { beforeAll, describe, expect, it, vi } from "vitest"
import { MSMediaDevices } from "../domain/domains"

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
	it("should list devices (mocked)", async () => {
		const devices: MediaDeviceInfo[] = [
			{
				deviceId: "1",
				kind: "videoinput",
				groupId: "group1",
				label: "Mock Camera",
				toJSON: () => ({}),
			},
		]
		vi.spyOn(navigator.mediaDevices, "enumerateDevices").mockResolvedValue(
			devices,
		)
		const result = await MSMediaDevices.listDevices()
		expect(result).toEqual(devices)
	})

	it("should request camera stream (mocked)", async () => {
		const stream = mediaStreamMock
		vi.spyOn(navigator.mediaDevices, "getUserMedia").mockResolvedValue(stream)
		const result = await MSMediaDevices.requestCameraStream({ video: true })
		expect(result).toBe(stream)
	})

	it("should register device change callback", () => {
		const callback = vi.fn()
		MSMediaDevices.onDeviceChange(callback)
		expect(navigator.mediaDevices.ondevicechange).toBe(callback)
	})
})
