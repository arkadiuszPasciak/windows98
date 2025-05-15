import { beforeEach, describe, expect, it } from "vitest"
import { SaveFileDomain } from "../../src/domain/domains"

describe("SaveFileDomain", () => {
	let saveFileDomain: SaveFileDomain<string>

	beforeEach(() => {
		saveFileDomain = new SaveFileDomain()
	})

	it("should set content correctly", () => {
		const content = "Test content"
		saveFileDomain.setContent(content)
		expect(saveFileDomain.content).toBe(content)
	})

	it("should set fileName correctly", () => {
		const fileName = "test.txt"
		saveFileDomain.setFileName(fileName)
		expect(saveFileDomain.fileName).toBe(fileName)
	})

	it("should set fileType correctly", () => {
		const fileType = "text/plain"
		saveFileDomain.setFileType(fileType)
		expect(saveFileDomain.fileType).toBe(fileType)
	})
})
