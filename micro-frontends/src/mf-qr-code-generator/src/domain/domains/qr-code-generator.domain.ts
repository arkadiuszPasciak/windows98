import { MSQRCode } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { QRCodeGeneratorDomainContract } from "../contracts"
import type { Format, Size, Type } from "../models"

export class QRCodeGeneratorDomain implements QRCodeGeneratorDomainContract {
	private msQRCode = MSQRCode
	public content = ""
	public format: Format = "jpg"
	public size: Size = "150x150"
	public type: Type = "email"

	constructor() {
		makeAutoObservable(this)
	}

	public setContent(value: string): void {
		this.content = value
	}

	public setFormat(value: Format): void {
		this.format = value
	}

	public setSize(value: Size): void {
		this.size = value
	}

	public setType(value: Type): void {
		this.type = value
	}

	public generateQRCode(): HTMLCanvasElement {
		const buildedContent = this.msQRCode.build(this.content, this.type)

		return this.msQRCode.generate(buildedContent, this.size)
	}
}

export const qrCodeGeneratorDomain = new QRCodeGeneratorDomain()
