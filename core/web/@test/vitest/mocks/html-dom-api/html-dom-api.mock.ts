import { vi } from "vitest"
import { HTMLImageElementInterfaceMock } from "./interfaces"

class HTMLDOMAPIMock {
	public implementMock() {
		vi.stubGlobal("Image", HTMLImageElementInterfaceMock)
	}
}

export const htmlDOMAPIMock = new HTMLDOMAPIMock()
