import type { QRCodeSize, QRCodeType } from "../models"

export interface QRCodeDomainContract {
	build(content: string, type: QRCodeType): string
	generate(content: string, size: QRCodeSize): HTMLCanvasElement
}
