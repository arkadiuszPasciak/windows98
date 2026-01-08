import { vi } from "vitest"

export class HTMLCanvasElementInterfaceMock {
	public width: number = 0
	public height: number = 0
	public tagName: string = "CANVAS"

	constructor(width: number = 300, height: number = 150) {
		this.width = width
		this.height = height
	}

	public getContext = vi.fn().mockReturnValue({
		drawImage: vi.fn(),
	})

	public toDataURL = vi.fn((format?: string, quality?: number) => {
		const mime = format || "image/png"
		const qual = typeof quality === "number" ? quality : "default"
		return `data:${mime};base64,MOCKED_DATA_URL;quality=${qual}`
	})
}
