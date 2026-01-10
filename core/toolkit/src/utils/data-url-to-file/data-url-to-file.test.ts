import { fileAPIMock } from "@windows98/web/mocks"
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest"
import { dataURLToFile } from "./data-url-to-file.util"

const testData = {
	dataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA",
	format: "image/png",
	fileName: "test.png",
}

describe("dataURLToFile", () => {
	beforeAll(() => {
		fileAPIMock.implementMock()
	})

	afterAll(() => {
		vi.restoreAllMocks()
	})

	it("should convert data URL to File", async () => {
		const file = dataURLToFile(testData.dataURL, testData.fileName)

		expect(file).toBeInstanceOf(File)
		expect(file.name).toBe(testData.fileName)
		expect(file.type).toBe(testData.format)
	})
})
