import { vi } from "vitest"

class WindowSessionStorageMock {
	public createMock(store: { [key: string]: string }): Storage {
		return {
			getItem: vi.fn((key) => {
				return store[key] || null
			}),
			setItem: vi.fn(),
			removeItem: vi.fn(),
			clear: vi.fn(),
			length: 0,
			key: vi.fn(),
		}
	}

	public implementMock(sessionStorageMock: Storage) {
		vi.stubGlobal("sessionStorage", sessionStorageMock)
	}
}

export const windowSessionStorageMock = new WindowSessionStorageMock()
