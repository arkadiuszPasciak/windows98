import { vi } from "vitest"
import { MediaDevicesInterfaceMock } from "./interfaces"

class MediaCaptureAndStreamsAPIMock {
	public implementMock() {
		vi.stubGlobal("MediaDevices", MediaDevicesInterfaceMock)
	}

	public reset() {
		vi.unstubAllGlobals()
	}
}

export const mediaCaptureAndStreamsAPIMock = new MediaCaptureAndStreamsAPIMock()
