import { CanvasAPI } from "@windows98/web"
import type { ImageManagerDomainContract } from "../contracts"
import type { ConvertedImage, ImageFormat, ImageQuality } from "../models"

export class ImageManagerDomain implements ImageManagerDomainContract {
	private canvasAPI: CanvasAPI

	constructor() {
		this.canvasAPI = new CanvasAPI()
	}

	public convertImage(
		canvasElement: HTMLCanvasElement,
		format: ImageFormat,
		quality?: ImageQuality,
	): ConvertedImage {
		return this.canvasAPI.convertCanvas(canvasElement, format, quality)
	}
}

export const MSImageManager = new ImageManagerDomain()
