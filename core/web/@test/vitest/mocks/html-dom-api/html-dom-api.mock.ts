import { vi } from "vitest"
import {
	HTMLAudioElementInterfaceMock,
	HTMLImageElementInterfaceMock,
} from "./interfaces"

class HTMLDOMAPIMock {
	public implementMock() {
		vi.stubGlobal("Audio", HTMLAudioElementInterfaceMock)
		vi.stubGlobal("Image", HTMLImageElementInterfaceMock)
	}

	public reset() {
		vi.unstubAllGlobals()
	}
}

export const htmlDOMAPIMock = new HTMLDOMAPIMock()
