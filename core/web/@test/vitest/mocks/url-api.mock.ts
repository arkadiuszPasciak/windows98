import { vi } from "vitest"

interface URLMock {
	createObjectURL: (object: Blob | MediaSource) => string
}

class URLAPIMock {
	public createMock(mockedUrl: string): URLMock {
		return {
			createObjectURL: (_object) => mockedUrl,
		}
	}

	public implementMock(urlMock: URLMock) {
		vi.stubGlobal("URL", urlMock)
	}
}

export const urlAPIMock = new URLAPIMock()
