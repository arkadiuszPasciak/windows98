import { vi } from "vitest"

class MediaSourceAPIMock {
	public createMock() {
		return class {
			addSourceBuffer = vi.fn()
			removeSourceBuffer = vi.fn()
			endOfStream = vi.fn()
			addEventListener = vi.fn()
			removeEventListener = vi.fn()
			dispatchEvent = vi.fn()
			duration = 0
			readyState = "closed"
		} as unknown as MediaSource
	}

	public implementMock() {
		vi.stubGlobal("MediaSource", this.createMock())
	}
}

export const mediaSourceAPIMock = new MediaSourceAPIMock()
