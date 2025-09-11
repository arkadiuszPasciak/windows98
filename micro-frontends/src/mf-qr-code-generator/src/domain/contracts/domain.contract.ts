import type { Maybe } from "@windows98/toolkit"
import type { Format, QRCode, Size, Type } from "../models"

export interface QRCodeGeneratorDomainContract {
	content: string
	format: Format
	qrCode: Maybe<QRCode>
	size: Size
	type: Type

	setContent(value: string): void
	setFormat(value: Format): void
	setSize(value: Size): void
	setType(value: Type): void

	generateQRCode(): void
}
