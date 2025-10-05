import { vi } from "vitest"

class ClipboardAPIMock {
	private clipboardText = ""

	public createMock() {
		return {
			writeText: vi.fn((text: string) => {
				this.clipboardText = text
				return Promise.resolve()
			}),
			readText: vi.fn(() => {
				return Promise.resolve(this.clipboardText)
			}),
		} as unknown as Clipboard
	}

	public implementMock(clipboardMock: Clipboard) {
		vi.stubGlobal("navigator", {
			clipboard: clipboardMock,
		})
	}
}

export const clipboardAPIMock = new ClipboardAPIMock()
