import { beforeEach, describe, expect, it, vi } from "vitest"
import { MSClipboard } from "../../src/domain/domains/clipboard.domain"

describe("ClipboardDomain", () => {
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
	it("should copy and paste text using the repository", async () => {
		await MSClipboard.copyText("test")
		expect(await MSClipboard.pasteText()).toBe("test")
	})

	it("should overwrite clipboard content", async () => {
		await MSClipboard.copyText("foo")
		await MSClipboard.copyText("bar")
		expect(await MSClipboard.pasteText()).toBe("bar")
	})
})
