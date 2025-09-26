import { vi } from "vitest"

class MediaDevicesAPIMock {
	public createMock(id: string) {
		return {
			id: id,
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
			clone: vi.fn(() => ({})),
			stop: vi.fn(),
		} as unknown as MediaStream
	}

	public implementMock(mediaStreamMock: MediaStream) {
		this.ensureNavigatorMediaDevicesMocked()

		vi.spyOn(window.navigator.mediaDevices, "getUserMedia").mockResolvedValue(
			mediaStreamMock,
		)
	}

	private ensureNavigatorMediaDevicesMocked() {
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
}

export const mediaDevicesAPIMock = new MediaDevicesAPIMock()
