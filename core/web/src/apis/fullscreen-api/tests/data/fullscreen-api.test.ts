import { beforeAll, describe, expect, it } from "vitest"
import { fullscreenAPIMock } from "../../../../../@test/vitest/mocks"
import { FullscreenAPIRepository } from "../../src/data/repositories"

describe("FullscreenAPIRepository", () => {
	const fullscreenData = {
		fullscreenElement: true,
	}
	const fullscreenAPIRepository = new FullscreenAPIRepository()
	const fullscreenMock = fullscreenAPIMock.createMock(
		fullscreenData.fullscreenElement,
	)

	beforeAll(() => {
		fullscreenAPIMock.implementMock(fullscreenMock)
	})

	it("should call exitFullscreen on document", async () => {
		await fullscreenAPIRepository.exitFullscreen()
	})

	it("should call requestFullscreen on documentElement", async () => {
		await fullscreenAPIRepository.requestFullscreen()
	})

	it("should return true when fullscreenElement is not null", () => {
		expect(fullscreenAPIRepository.isFullscreen()).toBe(true)
	})
})
