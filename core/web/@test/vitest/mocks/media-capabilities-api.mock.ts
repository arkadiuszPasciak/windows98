import { vi } from "vitest"

class MediaCapabilitiesAPIMock {
	public createMock() {
		return {
			decodingInfo: vi.fn().mockImplementation(async () => ({
				supported: true,
				smooth: true,
				powerEfficient: true,
				config: {},
			})),
			encodingInfo: vi.fn().mockImplementation(async () => ({
				supported: true,
				smooth: true,
				powerEfficient: true,
				config: {},
			})),
		}
	}

	public implementMock() {
		vi.stubGlobal("navigator", {
			mediaCapabilities: this.createMock(),
		})
	}
}

export const mediaCapabilitiesAPIMock = new MediaCapabilitiesAPIMock()
