import type { ConvertedImage, ImageFormat, ImageQuality } from "../models"

export interface ImageManagerDomainContract {
	convertImage(
		canvasElement: HTMLCanvasElement,
		format: ImageFormat,
		quality?: ImageQuality,
	): ConvertedImage
}
