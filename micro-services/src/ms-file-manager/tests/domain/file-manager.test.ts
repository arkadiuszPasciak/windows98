import { urlAPIMock } from "@windows98/web/mocks"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { FileManagerDomain } from "../../src/domain/domains/file-manager.domain"

const testDataMock = {
	plainText: "Hello, World!",
	filename: "hello.txt",
	type: "text/plain",
}

describe("FileManagerDomain", () => {
	let fileManager: FileManagerDomain

	beforeEach(() => {
		fileManager = new FileManagerDomain()
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("should download a file with the given File and filename", async () => {
		const file = new File([testDataMock.plainText], testDataMock.filename, {
			type: testDataMock.type,
		})
		const filename = testDataMock.filename

		await expect(
			fileManager.downloadFile(file, filename),
		).resolves.not.toThrow()
	})

	it("should open a file and return the File object", async () => {
		const mockFile = {
			name: testDataMock.filename,
			type: testDataMock.type,
			text: vi.fn().mockResolvedValue(testDataMock.plainText),
		} as unknown as File

		const mockInput = {
			files: [mockFile],
		}

		vi.spyOn(document, "createElement").mockImplementation(() => {
			return {
				type: "file",
				onchange: null,
				click: function () {
					if (this.onchange) {
						this.onchange({ target: mockInput } as unknown as Event)
					}
				},
			} as HTMLInputElement
		})

		const file = await fileManager.openFile()
		expect(file).toBe(mockFile)
		expect(file.name).toBe(testDataMock.filename)
		expect(file.type).toBe(testDataMock.type)
	})

	it("should save a file with the given content, filename, and type", async () => {
		const appendChildMock = vi.fn()
		const removeChildMock = vi.fn()

		urlAPIMock.implementMock(urlAPIMock.createMock("blob:url"))

		vi.spyOn(document.body, "appendChild").mockImplementation(appendChildMock)
		vi.spyOn(document.body, "removeChild").mockImplementation(removeChildMock)

		await fileManager.saveFile(
			testDataMock.plainText,
			testDataMock.filename,
			testDataMock.type,
		)

		expect(appendChildMock).toHaveBeenCalled()
		expect(removeChildMock).toHaveBeenCalled()
	})
})
