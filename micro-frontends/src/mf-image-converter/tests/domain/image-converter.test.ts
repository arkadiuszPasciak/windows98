import { describe, expect, it, vi } from "vitest"
import { ImageConverterDomain } from "../../src/domain/domains"

const testData = {
	imageName: "mock-image",
	imageNameWithExtension: "mock-image.png",
	dataURL: "data:image/png;base64,mockdata",
}

vi.mock("@windows98/micro-services", () => ({
	MSFileManager: {
		downloadFile: vi.fn(() => Promise.resolve()),
		openFile: vi.fn(() => Promise.resolve(new File([], testData.imageName))),
	},
	MSImageManager: {
		convertImage: vi.fn(() => testData.dataURL),
	},
}))

vi.mock("@windows98/toolkit", () => ({
	dataURLToFile: vi.fn(
		(_dataURL: string, fileName: string) => new File([], fileName),
	),
	fileToCanvas: vi.fn(() => Promise.resolve(document.createElement("canvas"))),
}))

describe("ImageConverterDomain", () => {
	const domain: ImageConverterDomain = new ImageConverterDomain()

	it("should set file name and format, open, convert, and download image", async () => {
		await domain.openImage()
		expect(domain.originalImageFile, "should open image").not.toBeNull()

		domain.setImageName("test-file-name")
		expect(domain.imageName, "should set file name").toBe("test-file-name")

		domain.setFormat("image/jpeg")
		expect(domain.format, "should set format").toBe("image/jpeg")

		await domain.convertImage()
		expect(domain.convertedImageFile, "should convert image").not.toBeNull()

		await expect(
			domain.downloadImage(),
			"should download image",
		).resolves.not.toThrow()

		expect(domain, "should reset domain after download").toMatchObject({
			imageName: "converted-image",
			format: "image/png",
			convertedImageFile: null,
			originalImageFile: null,
		})
	})
})
