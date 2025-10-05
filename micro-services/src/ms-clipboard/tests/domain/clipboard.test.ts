import { clipboardAPIMock } from "@windows98/web/mocks"
import { beforeEach, describe, expect, it } from "vitest"
import { MSClipboard } from "../../src/domain/domains/clipboard.domain"

describe("ClipboardDomain", () => {
	const clipboardMock = clipboardAPIMock.createMock()

	beforeEach(() => {
		clipboardAPIMock.implementMock(clipboardMock)
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
