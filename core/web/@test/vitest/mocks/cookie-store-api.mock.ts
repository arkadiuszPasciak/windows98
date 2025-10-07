import { vi } from "vitest"

class CookieStoreAPIMock {
	private cookies: Record<string, string> = {}

	public createMock() {
		return {
			delete: vi.fn(async (id: string) => {
				delete this.cookies[id]
			}),
			get: vi.fn(async (id: string) => {
				if (id in this.cookies) {
					return { name: id, value: this.cookies[id] }
				}
				return undefined
			}),
			getAll: vi.fn(async () => {
				return Object.entries(this.cookies).map(([name, value]) => ({
					name,
					value,
				}))
			}),
			set: vi.fn(async (id: string, value: string) => {
				this.cookies[id] = value
			}),
		} as unknown as CookieStore
	}

	public implementMock(cookieStoreMock: CookieStore) {
		vi.stubGlobal("window", {
			cookieStore: cookieStoreMock,
		})
	}
}

export const cookieStoreAPIMock = new CookieStoreAPIMock()
