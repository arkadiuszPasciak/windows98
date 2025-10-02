import { vi } from "vitest"

class WebStorageAPIMock {
	public createMock(store: { [key: string]: string }): Storage {
		return {
			getItem: vi.fn((key) => {
				return store[key] || null
			}),
			setItem: vi.fn((key, value) => {
				store[key] = value
			}),
			removeItem: vi.fn((key) => {
				delete store[key]
			}),
			clear: vi.fn(() => {
				for (const key of Object.keys(store)) {
					delete store[key]
				}
			}),
			length: 0,
			key: vi.fn((index) => Object.keys(store)[index] || null),
		}
	}

	public implementMock(
		storage: "sessionStorage" | "localStorage",
		storageMock: Storage,
	) {
		vi.stubGlobal(storage, storageMock)
	}
}

export const webStorageAPIMock = new WebStorageAPIMock()
