import { vi } from "vitest"

class BroadcastChannelAPIMock {
	public createMock() {
		return class {
			constructor(name: string) {
				this.name = name
			}
			postMessage = () => true
			name = ""
			onmessage = null
			onmessageerror = null
			close = vi.fn()
		}
	}

	public implementMock() {
		vi.stubGlobal("BroadcastChannel", this.createMock())
	}
}

export const broadcastChannelAPIMock = new BroadcastChannelAPIMock()
