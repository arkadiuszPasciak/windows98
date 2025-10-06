import { type Mock, vi } from "vitest"

interface FullscreenMock {
	requestFullscreen: Mock<() => Promise<void>>
	exitFullscreen: Mock<() => Promise<void>>
	fullscreenElement: boolean
}

class FullscreenAPIMock {
	public createMock(isFullscreen: boolean): FullscreenMock {
		return {
			requestFullscreen: vi.fn(() => Promise.resolve()),
			exitFullscreen: vi.fn(() => Promise.resolve()),
			fullscreenElement: isFullscreen,
		}
	}

	public implementMock(fullscreenMock: FullscreenMock) {
		const { requestFullscreen, exitFullscreen, fullscreenElement } =
			fullscreenMock

		vi.stubGlobal("document", {
			documentElement: {
				requestFullscreen,
			},
			exitFullscreen,
			fullscreenElement,
		})
	}
}

export const fullscreenAPIMock = new FullscreenAPIMock()
