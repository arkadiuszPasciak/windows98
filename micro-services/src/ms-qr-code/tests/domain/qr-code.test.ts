import { describe, expect, it, vi } from "vitest"
import { MSQRCode } from "../../src/domain/domains"

function mockCanvas(): void {
	const canvasMock = document.createElement("canvas")
	vi.spyOn(document, "createElement").mockImplementation((tag) => {
		if (tag === "canvas") return canvasMock
		return document.createElement(tag)
	})

	const drawImageMock = vi.fn()
	const fillRectMock = vi.fn()
	canvasMock.getContext = vi.fn().mockReturnValue({
		drawImage: drawImageMock,
		fillRect: fillRectMock,
		fillStyle: "",
	})
}

describe("QRCodeDomain", () => {
	it("should generate qr code as canvas element", () => {
		mockCanvas()

		const content = "mailto:test@example.com"
		const size = "200x200"
		const canvas = MSQRCode.generate(content, size)

		expect(canvas).toBeInstanceOf(globalThis.HTMLCanvasElement)
		expect(canvas.width).toBe(200)
		expect(canvas.height).toBe(200)
	})
})
