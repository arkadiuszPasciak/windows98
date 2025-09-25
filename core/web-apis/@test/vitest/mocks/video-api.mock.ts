import { vi } from "vitest"

class VideoAPIMock {
	public createMockElement(videoHeight: number, videoWidth: number) {
		return {
			videoHeight: videoHeight,
			videoWidth: videoWidth,
		} as unknown as HTMLVideoElement
	}

	public implementMock(videoElementMock: HTMLVideoElement) {
		vi.spyOn(window.document, "createElement").mockImplementation((tag) => {
			if (tag === "video") return videoElementMock
			return window.document.createElement(tag)
		})
	}
}

export const videoAPIMock = new VideoAPIMock()
