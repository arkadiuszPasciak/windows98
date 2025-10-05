import { beforeAll, describe, expect, it } from "vitest"
import { userAgentClientHintsAPIMock } from "../../../../../@test/vitest/mocks"
import { UserAgentClientHintsAPIRepository } from "../../src/data/repositories"

describe("UserAgentClientHintsAPIRepository", () => {
	const testData = {
		brands: [
			{ brand: "Google", version: "89" },
			{ brand: "Apple", version: "14" },
		],
		mobile: true,
		platform: "MacOS",
	}

	const userAgentRepository = new UserAgentClientHintsAPIRepository()
	const userAgentMock = userAgentClientHintsAPIMock.createMock(testData)

	beforeAll(() => {
		userAgentClientHintsAPIMock.implementMock(userAgentMock)
	})

	it("getBrands", async () => {
		const result = userAgentRepository.getBrands()
		expect(result).toEqual(testData.brands)
	})

	it("isMobile", async () => {
		const result = userAgentRepository.isMobile()
		expect(result).toBe(testData.mobile)
	})

	it("getPlatform", async () => {
		const result = userAgentRepository.getPlatform()
		expect(result).toBe(testData.platform)
	})
})
