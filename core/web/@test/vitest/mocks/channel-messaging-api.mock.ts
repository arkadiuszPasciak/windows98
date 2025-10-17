import { vi } from "vitest"

class ChannelMessagingAPIMock {
	public createMock() {
		return class {
			port1 = null
			port2 = null
		}
	}

	public implementMock() {
		vi.stubGlobal("MessageChannel", this.createMock())
	}
}

export const channelMessagingAPIMock = new ChannelMessagingAPIMock()
