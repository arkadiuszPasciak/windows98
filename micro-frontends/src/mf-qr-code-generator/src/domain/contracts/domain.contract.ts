import type { Format, Size, Type } from "../models"

export interface QRCodeGeneratorDomainContract {
	content: string
	format: Format
	size: Size
	type: Type

	setContent(value: string): void
	setFormat(value: Format): void
	setSize(value: Size): void
	setType(value: Type): void

	generateQRCode(): HTMLCanvasElement
}
