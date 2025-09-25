import { beforeAll, describe, expect, it } from "vitest"
import { screenAPIMock } from "../../../../@test/vitest/mocks"
import { ScreenAPIRepository } from "../../src/data/repositories"

describe("ScreenAPIRepository", () => {
	const testData = {
		height: 1080,
		width: 1920,
	}
	const screenRepository = new ScreenAPIRepository()
	const screenMock = screenAPIMock.createMock(testData.height, testData.width)

	beforeAll(() => {
		screenAPIMock.implementMock(screenMock)
	})

	it("getHeight", async () => {
		const result = screenRepository.getHeight()
		expect(result).toBe(testData.height)
	})

	it("getWidth", async () => {
		const result = screenRepository.getWidth()
		expect(result).toBe(testData.width)
	})
})
