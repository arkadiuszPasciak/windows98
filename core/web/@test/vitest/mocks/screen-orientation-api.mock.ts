import { vi } from "vitest"

class ScreenOrientationAPIMock {
	public createMock() {
		return {
			type: "portrait-primary",
			angle: 0,
			lock: vi.fn(),
			unlock: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
		}
	}

	public implementMock() {
		vi.stubGlobal("screen", {
			orientation: this.createMock(),
		})
	}

	public reset() {
		vi.restoreAllMocks()
	}
}

export const screenOrientationAPIMock = new ScreenOrientationAPIMock()
