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
			toString: () => "",
			origin: "",
			pathname: "",
			port: "",
			protocol: "",
			search: "",
			assign: () => {},
			reload: () => {},
			replace: () => {},
		}
	}

	public implementMock(locationMock: Location) {
		vi.stubGlobal("location", locationMock)
	}
}

export const locationAPIMock = new LocationAPIMock()
