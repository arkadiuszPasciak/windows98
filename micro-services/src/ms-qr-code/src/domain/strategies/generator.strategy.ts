import qrcode from "qrcode-generator"
import type { GeneratorStrategyContract } from "../contracts"
import type { QRCode, QRCodeSize } from "../models"

export class GeneratorStrategy implements GeneratorStrategyContract {
	public generate(content: string, size: QRCodeSize): HTMLCanvasElement {
		const qr = this.createQRCode(content)
		const [width, height] = this.parseSize(size)
		const cellSize = this.calculateCellSize(qr, width, height)
		return this.renderToCanvas(qr, cellSize)
	}

	private createQRCode(content: string) {
		const typeNumber = 0
		const errorCorrectionLevel = "L"
		const qr = qrcode(typeNumber, errorCorrectionLevel)
		qr.addData(content)
		qr.make()
		return qr
	}

	private parseSize(size: QRCodeSize): [number, number] {
		return size.split("x").map(Number) as [number, number]
	}

	private calculateCellSize(qr: QRCode, width: number, height: number): number {
		const moduleCount = qr.getModuleCount()
		return Math.floor(Math.min(width, height) / moduleCount)
	}

	private renderToCanvas(qr: QRCode, cellSize: number): HTMLCanvasElement {
		const moduleCount = qr.getModuleCount()
		const canvas = document.createElement("canvas")
		canvas.width = moduleCount * cellSize
		canvas.height = moduleCount * cellSize
		const ctx = canvas.getContext("2d")
		if (!ctx) return canvas
		ctx.fillStyle = "#fff"
		ctx.fillRect(0, 0, canvas.width, canvas.height)
		ctx.fillStyle = "#000"
		for (let row = 0; row < moduleCount; row++) {
			for (let col = 0; col < moduleCount; col++) {
				if (qr.isDark(row, col)) {
					ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize)
				}
			}
		}
		return canvas
	}
}
