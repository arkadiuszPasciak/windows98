import { beforeEach, describe, expect, it, vi } from "vitest"
import { ClipboardRepository } from "../../src/data/repositories"

const clipboardRepository = new ClipboardRepository()

describe("ClipboardRepository", () => {
	let clipboardValue = ""

	beforeEach(() => {
		clipboardValue = ""
		Object.defineProperty(window, "navigator", {
			value: {
				clipboard: {
					writeText: vi.fn((text: string) => {
						clipboardValue = text
						return Promise.resolve()
					}),
					readText: vi.fn(() => Promise.resolve(clipboardValue)),
				},
			},
			configurable: true,
		})
	})
	it("should copy and paste text", async () => {
		await clipboardRepository.writeText("test")
		expect(await clipboardRepository.readText()).toBe("test")
	})

	it("should overwrite clipboard content", async () => {
		await clipboardRepository.writeText("foo")
		await clipboardRepository.writeText("bar")
		expect(await clipboardRepository.readText()).toBe("bar")
	})
})
