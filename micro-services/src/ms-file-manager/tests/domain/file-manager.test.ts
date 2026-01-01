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

	it("should download a file with the given blob and filename", () => {
		const blob = new Blob([testDataMock.plainText], { type: testDataMock.type })
		const filename = testDataMock.filename

		const appendChildMock = vi.fn()
		const removeChildMock = vi.fn()

		urlAPIMock.implementMock(urlAPIMock.createMock("blob:url"))

		vi.spyOn(document.body, "appendChild").mockImplementation(appendChildMock)
		vi.spyOn(document.body, "removeChild").mockImplementation(removeChildMock)

		fileManager.downloadFile(blob, filename)

		expect(global.URL.createObjectURL).toHaveBeenCalledWith(blob)
		expect(appendChildMock).toHaveBeenCalled()
		expect(removeChildMock).toHaveBeenCalled()
	})

	it("should open a file and return its contents", async () => {
		const mockFile = {
			text: vi.fn().mockResolvedValue(testDataMock.plainText),
			name: testDataMock.filename,
			type: testDataMock.type,
		} as unknown as File

		const mockInput = {
			files: [mockFile],
		}

		vi.spyOn(document, "createElement").mockImplementation(() => {
			return {
				type: testDataMock.type,
				accept: ".txt,.csv,.doc,.rtf",
				onchange: null,
				click: function () {
					if (this.onchange) {
						this.onchange({ target: mockInput } as unknown as Event)
					}
				},
			} as HTMLInputElement
		})

		const content = await fileManager.openFile()
		expect(content).toBe(testDataMock.plainText)
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

		expect(global.URL.createObjectURL).toHaveBeenCalled()
		expect(appendChildMock).toHaveBeenCalled()
		expect(removeChildMock).toHaveBeenCalled()
	})
})
