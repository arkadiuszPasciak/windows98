import { vi } from "vitest"

class WindowLocalStorageMock {
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

	public implementMock(localStorageMock: Storage) {
		vi.stubGlobal("localStorage", localStorageMock)
	}
}

export const windowLocalStorageMock = new WindowLocalStorageMock()
