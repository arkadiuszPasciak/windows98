import { vi } from "vitest"

class CompressionStreamsAPIMock {
	public createMock() {
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
		} as unknown as CompressionStream | DecompressionStream
	}

	public implementMock() {
		vi.stubGlobal("CompressionStream", this.createMock())
		vi.stubGlobal("DecompressionStream", this.createMock())
	}
}

export const compressionStreamsAPIMock = new CompressionStreamsAPIMock()
