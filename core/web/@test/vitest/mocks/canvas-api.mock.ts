import { vi } from "vitest"

class CanvasAPIMock {
	public createMock(dataUrl: string): HTMLCanvasElement {
		return {
			getContext: vi.fn().mockReturnValue({
				drawImage: vi.fn(),
			}),
			toDataURL: (format: string, _quality?: number) =>
				vi.fn().mockReturnValue(`${format};base64,${dataUrl}`)(),
		} as unknown as HTMLCanvasElement
	}

	public implementMock(canvasElementMock: HTMLCanvasElement) {
		vi.spyOn(window.document, "createElement").mockImplementation((tag) => {
			if (tag === "canvas") return canvasElementMock
			return window.document.createElement(tag)
		})
	}
}

export const canvasAPIMock = new CanvasAPIMock()
