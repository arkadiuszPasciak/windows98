import { vi } from "vitest"

class LocationAPIMock {
	public createMock(): Location {
		return {
			ancestorOrigins: {
				length: 0,
				item: (_index) => null,
				contains: (_str) => false,
			},
			hash: "",
			host: "",
			hostname: "",
			href: "",
			toString: vi.fn(),
			origin: "",
			pathname: "",
			port: "",
			protocol: "",
			search: "",
			assign: vi.fn(),
			reload: vi.fn(),
			replace: vi.fn(),
		}
	}

	public implementMock(locationMock: Location) {
		vi.stubGlobal("location", locationMock)
	}
}

export const locationAPIMock = new LocationAPIMock()
