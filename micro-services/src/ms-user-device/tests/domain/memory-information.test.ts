import { deviceMemoryAPIMock } from "@windows98/web/mocks"
import { afterEach, describe, expect, it, suite, vi } from "vitest"
import { UserDeviceDomain } from "../../src/domain/domains"

describe("UserDeviceDomain", () => {
	afterEach(() => {
		vi.resetAllMocks()
	})

	suite("getMemoryInformation", () => {
		it("should return null when is not available", () => {
			const domain = new UserDeviceDomain()

			const memoryInformation = domain.getMemoryInformation()

			expect(memoryInformation).toBeNull()
		})

		it("should return memory information when available", () => {
			const domain = new UserDeviceDomain()
			const mockMemoryInformation = {
				RAMInGB: 8,
			}
			const createdMock = deviceMemoryAPIMock.createMock(
				mockMemoryInformation.RAMInGB,
			)

			deviceMemoryAPIMock.implementMock(createdMock)

			const memoryInformation = domain.getMemoryInformation()

			expect(memoryInformation).toEqual({
				RAMInGB: mockMemoryInformation.RAMInGB,
			})
		})
	})
})
