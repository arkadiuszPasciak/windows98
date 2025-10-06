import { beforeAll, describe, expect, it } from "vitest"
import { deviceMemoryAPIMock } from "../../../../../@test/vitest/mocks"
import { DeviceMemoryAPIRepository } from "../../src/data/repositories"

describe("DeviceMemoryAPIRepository", () => {
	const deviceMemoryRepository = new DeviceMemoryAPIRepository()
	const deviceMemoryData = {
		deviceMemory: 8,
	}

	beforeAll(() => {
		deviceMemoryAPIMock.implementMock(deviceMemoryData)
	})

	it("getDeviceMemory", async () => {
		const result = deviceMemoryRepository.getDeviceMemory()
		expect(result).toBe(deviceMemoryData.deviceMemory)
	})
})
