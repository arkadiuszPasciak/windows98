import type { QRCodeType } from "../models"

export interface BuilderStrategyContract {
	build(content: string, type: QRCodeType): string
}
