import type { BuilderStrategyContract } from "../contracts"
import type { QRCodeType } from "../models"

export class BuilderStrategy implements BuilderStrategyContract {
	public build(content: string, type: QRCodeType): string {
		return `${this.getPrefix(type)}${content}`
	}

	private getPrefix(type: QRCodeType): string {
		switch (type) {
			case "email":
				return "mailto:"
			case "phone":
				return "tel:"
			case "sms":
				return "sms:"
			case "website":
				return "https://"
			default:
				return ""
		}
	}
}
