import { vi } from "vitest"
import { HTMLCanvasElementInterfaceMock } from "./interfaces"

class CanvasAPIMock {
	public implementMock() {
		vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
			if (tag === "canvas")
				return new HTMLCanvasElementInterfaceMock() as unknown as HTMLCanvasElement
			return window.document.createElement(tag)
		})
	}
}

export const canvasAPIMock = new CanvasAPIMock()
