import { beforeAll, describe, expect, it } from "vitest"
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
		locationRepository.reload()

		expect(window.location.reload).toHaveBeenCalled()
	})

	it("setHref", () => {
		locationRepository.setHref(testData.href)
		expect(window.location.href).toBe(testData.href)
	})
})
