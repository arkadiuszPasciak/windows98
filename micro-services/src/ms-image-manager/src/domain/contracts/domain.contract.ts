import type { ConvertedImage, ImageFormat, ImageQuality } from "../models"

export interface ImageManagerDomainContract {
	convertImage(format: ImageFormat, quality?: ImageQuality): ConvertedImage
}
