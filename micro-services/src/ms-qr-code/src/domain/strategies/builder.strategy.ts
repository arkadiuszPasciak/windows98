import type { BuilderStrategyContract } from "../contracts"
import type { QRCodeType } from "../models"

export class BuilderStrategy implements BuilderStrategyContract {
	build(content: string, type: QRCodeType): string {
		return `${type}:${content}`
	}
}
