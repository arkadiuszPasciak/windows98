import type { QRCodeSize } from "../models"

export interface GeneratorStrategyContract {
	generate(content: string, size: QRCodeSize): HTMLCanvasElement
}
