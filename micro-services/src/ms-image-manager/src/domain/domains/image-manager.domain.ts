import { CanvasAPI } from "@windows98/web"
import type { ImageManagerDomainContract } from "../contracts"
import type { ConvertedImage, ImageFormat, ImageQuality } from "../models"

export class ImageManagerDomain implements ImageManagerDomainContract {
	private canvasAPI: CanvasAPI

	constructor() {
		this.canvasAPI = new CanvasAPI()
	}

	public convertImage(
		format: ImageFormat,
		quality?: ImageQuality,
	): ConvertedImage {
		const canvasElement = this.canvasAPI.createCanvas(100, 100)

		return this.canvasAPI.convertCanvas(canvasElement, format, quality)
	}
}

export const MSImageManager = new ImageManagerDomain()
