import { MSFileManager, MSImageManager } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { dataURLToFile, fileToCanvas } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { ImageConverterDomainContract } from "../contracts"
import type { ImageFile, ImageFormat } from "../models"

export class ImageConverterDomain implements ImageConverterDomainContract {
	public convertedImageFile: Maybe<ImageFile> = null
	public fileName: string = "converted-image"
	public format: ImageFormat = "image/png"
	public originalImageFile: Maybe<ImageFile> = null

	private fileManager: typeof MSFileManager
	private imageManager: typeof MSImageManager

	constructor() {
		makeAutoObservable(this)

		this.fileManager = MSFileManager
		this.imageManager = MSImageManager
	}

	public async convertImage(): Promise<void> {
		if (this.originalImageFile === null) return

		const canvasElement = await fileToCanvas(this.originalImageFile)

		const dataURL = this.imageManager.convertImage(canvasElement, this.format)

		this.convertedImageFile = dataURLToFile(dataURL, this.fileName)
	}

	public async downloadImage(): Promise<void> {
		if (this.convertedImageFile === null || this.fileName === "") return

		await this.fileManager.downloadFile(this.convertedImageFile, this.fileName)

		this.reset()
	}

	public async openImage(): Promise<void> {
		this.originalImageFile = await this.fileManager.openFile()
	}

	public reset(): void {
		this.convertedImageFile = null
		this.format = "image/png"
		this.fileName = ""
		this.originalImageFile = null
	}

	public setFormat(format: ImageFormat): void {
		if (this.format === format) return

		this.format = format
	}

	public setFileName(fileName: string): void {
		if (this.fileName === fileName) return

		this.fileName = fileName
	}
}
