import { beforeEach, describe, expect, it } from "vitest"
import { clipboardAPIMock } from "../../../../../@test/vitest/mocks"
import { ClipboardRepository } from "../../src/data/repositories"

const clipboardRepository = new ClipboardRepository()

describe("ClipboardRepository", () => {
	const clipboardMock = clipboardAPIMock.createMock()

	beforeEach(() => {
		clipboardAPIMock.implementMock(clipboardMock)
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
