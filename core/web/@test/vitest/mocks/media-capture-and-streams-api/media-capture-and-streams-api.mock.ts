import { vi } from "vitest"
import { MediaDevicesInterfaceMock } from "./interfaces"

class MediaCaptureAndStreamsAPIMock {
	public implementMock() {
		vi.stubGlobal("navigator", {
			mediaDevices: new MediaDevicesInterfaceMock(),
		})
	}

	public reset() {
		vi.unstubAllGlobals()
	}
}

export const mediaCaptureAndStreamsAPIMock = new MediaCaptureAndStreamsAPIMock()
