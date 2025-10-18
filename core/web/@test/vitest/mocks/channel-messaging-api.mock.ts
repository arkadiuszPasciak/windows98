import { vi } from "vitest"

class ChannelMessagingAPIMock {
	private MessagePortMock = class {
		onmessage: ((event: MessageEvent) => void) | null = null
		onmessageerror: ((event: MessageEvent) => void) | null = null
		postMessage = vi.fn()
		start = vi.fn()
		close = vi.fn()
		addEventListener = vi.fn()
		removeEventListener = vi.fn()
		dispatchEvent = vi.fn()
	}

	public createMock() {
		const MessagePortMock = this.MessagePortMock
		return class {
			port1 = new MessagePortMock()
			port2 = new MessagePortMock()
		}
	}

	public implementMock() {
		vi.stubGlobal("MessageChannel", this.createMock())
	}
}

export const channelMessagingAPIMock = new ChannelMessagingAPIMock()
