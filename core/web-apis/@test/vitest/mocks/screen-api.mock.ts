import { vi } from "vitest"

class ScreenAPIMock {
	public createMock(height: number, width: number): Screen {
		return {
			height: height,
			width: width,
			availHeight: height,
			availWidth: width,
			colorDepth: 24,
			pixelDepth: 24,
			orientation: {
				angle: 0,
				type: "landscape-primary",
				onchange: null,
				addEventListener: () => {},
				removeEventListener: () => {},
				dispatchEvent: () => false,
				unlock: (): void => {},
			},
		}
	}

	public implementMock(screenMock: Screen) {
		vi.stubGlobal("screen", screenMock)
	}
}

export const screenAPIMock = new ScreenAPIMock()
