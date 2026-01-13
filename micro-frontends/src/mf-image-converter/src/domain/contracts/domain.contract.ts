import type { Maybe } from "@windows98/toolkit"
import type { ImageFile, ImageFormat } from "../models"

export interface ImageConverterDomainContract {
	convertedImageFile: Maybe<ImageFile>
	format: ImageFormat
	imageName: string
	originalImageFile: Maybe<ImageFile>

	convertImage(): Promise<void>
	downloadImage(): Promise<void>
	openImage(): Promise<void>
	reset(): void
	setFormat(format: ImageFormat): void
	setImageName(imageName: string): void
}
