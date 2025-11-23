import { vi } from "vitest"

class VibrationAPIMock {
	public createMock() {
		return {
			vibrate: vi.fn((_pattern: number | number[]) => {
				return true
			}),
		}
	}

	public implementMock() {
		const { vibrate } = this.createMock()

		vi.stubGlobal("navigator", {
			vibrate,
		})
	}

	public reset() {
		vi.restoreAllMocks()
	}
}

export const vibrationAPIMock = new VibrationAPIMock()
