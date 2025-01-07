import { beforeEach, describe, expect, it, vi } from "vitest"
import { FileManagerDomain } from "../../src/domain/domains/file-manager.domain"
import { EFileTextTypes } from "../../src/domain/models"

describe("FileManagerDomain", () => {
	let fileManager: FileManagerDomain

	beforeEach(() => {
		fileManager = new FileManagerDomain()
	})

	it("should open a file and return its contents", async () => {
		const mockFile = {
			text: vi.fn().mockResolvedValue("file content"),
			name: "test.txt",
			type: "text/plain",
		} as unknown as File

		const mockInput = {
			files: [mockFile],
		}

		vi.spyOn(document, "createElement").mockImplementation(() => {
			return {
				type: "file",
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
		expect(content).toBe("file content")
	})

	it("should save a file with the given content, filename, and type", async () => {
		const content = "file content"
		const filename = "test.txt"
		const type = EFileTextTypes.PLAIN

		const createObjectURLMock = vi.fn(() => "blob:url")
		const appendChildMock = vi.fn()
		const removeChildMock = vi.fn()

		global.URL.createObjectURL = createObjectURLMock

		vi.spyOn(document.body, "appendChild").mockImplementation(appendChildMock)
		vi.spyOn(document.body, "removeChild").mockImplementation(removeChildMock)

		await fileManager.saveFile(content, filename, type)

		expect(createObjectURLMock).toHaveBeenCalled()
		expect(appendChildMock).toHaveBeenCalled()
		expect(removeChildMock).toHaveBeenCalled()
	})
})
