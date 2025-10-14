import { vi } from "vitest"

class EncodingAPIMock {
	public implementMock() {
		vi.stubGlobal("TextDecoder", this.createTextDecoderMock())
		vi.stubGlobal("TextEncoder", this.createTextEncoderMock())
		vi.stubGlobal("TextDecoderStream", this.createTextDecoderStreamMock())
		vi.stubGlobal("TextEncoderStream", this.createTextEncoderStreamMock())
	}

	private createTextDecoderMock() {
		return class {
			decode = vi.fn().mockReturnValue("")
		} as unknown as TextDecoder
	}

	private createTextEncoderMock() {
		return class {
			encode = vi.fn().mockReturnValue(new Uint8Array())
		} as unknown as TextEncoder
	}

	private createTextDecoderStreamMock() {
		return class {
			readable = {
				getReader: () => ({
					read: vi.fn().mockResolvedValue({ done: true, value: undefined }),
					releaseLock: vi.fn(),
				}),
				pipeTo: vi.fn().mockResolvedValue(undefined),
				locked: false,
			}
			writable = {
				getWriter: () => ({
					write: vi.fn().mockResolvedValue(undefined),
					close: vi.fn().mockResolvedValue(undefined),
					abort: vi.fn().mockResolvedValue(undefined),
					releaseLock: vi.fn(),
				}),
				locked: false,
			}
		} as unknown as TextDecoderStream
	}

	private createTextEncoderStreamMock() {
		return class {
			readable = {
				getReader: () => ({
					read: vi.fn().mockResolvedValue({ done: true, value: undefined }),
					releaseLock: vi.fn(),
				}),
				pipeTo: vi.fn().mockResolvedValue(undefined),
				locked: false,
			}
			writable = {
				getWriter: () => ({
					write: vi.fn().mockResolvedValue(undefined),
					close: vi.fn().mockResolvedValue(undefined),
					abort: vi.fn().mockResolvedValue(undefined),
					releaseLock: vi.fn(),
				}),
				locked: false,
			}
		} as unknown as TextEncoderStream
	}
}

export const encodingAPIMock = new EncodingAPIMock()
