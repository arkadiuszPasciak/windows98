import { beforeAll, describe, expect, it, vi } from "vitest"
import { locationAPIMock } from "../../../../../@test/vitest/mocks"
import { LocationAPIRepository } from "../../src/data/repositories"

describe("LocationAPIRepository", () => {
	const testData = {
		href: "https://www.example.com",
	}
	const locationRepository = new LocationAPIRepository()
	const locationMock = locationAPIMock.createMock()

	beforeAll(() => {
		locationAPIMock.implementMock(locationMock)
	})

	it("reload", () => {
		const reloadSpy = vi.spyOn(locationMock, "reload")
		locationRepository.reload()
		expect(reloadSpy).toHaveBeenCalled()
		reloadSpy.mockRestore()
	})

	it("setHref", () => {
		locationRepository.setHref(testData.href)
		expect(locationMock.href).toBe(testData.href)
	})
})
