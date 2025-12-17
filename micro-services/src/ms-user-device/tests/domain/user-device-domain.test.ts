import { batteryStatusAPIMock, deviceMemoryAPIMock } from "@windows98/web/mocks"
import { afterEach, describe, expect, it, suite, vi } from "vitest"
import { UserDeviceDomain } from "../../src/domain/domains"

describe("UserDeviceDomain", () => {
	afterEach(() => {
		vi.resetAllMocks()
	})

	suite("getBatteryInformation", () => {
		it("should return null when is not available", async () => {
			const domain = new UserDeviceDomain()

			const batteryInfo = await domain.getBatteryInformation()

			expect(batteryInfo).toBeNull()
		})

		it("should return battery information when available", async () => {
			const domain = new UserDeviceDomain()
			const mockBatteryInfo = {
				charging: true,
				level: 0.75,
				chargingTime: 1200,
				dischargingTime: 3600,
			}

			batteryStatusAPIMock.createMock(mockBatteryInfo)
			batteryStatusAPIMock.implementMock(mockBatteryInfo)

			const batteryInfo = await domain.getBatteryInformation()

			expect(batteryInfo).toEqual({
				isCharging: true,
				batteryLevel: 75,
				chargingTimeInMinutes: 20,
				dischargingTimeInMinutes: 60,
			})
		})
	})

	suite("getMemoryInformation", () => {
		it("should return null when is not available", () => {
			const domain = new UserDeviceDomain()

			const memoryInfo = domain.getMemoryInformation()

			expect(memoryInfo).toBeNull()
		})

		it("should return memory information when available", () => {
			const domain = new UserDeviceDomain()
			const mockMemoryInfo = {
				RAMInGB: 8,
			}
			const cratedMock = deviceMemoryAPIMock.createMock(mockMemoryInfo.RAMInGB)

			deviceMemoryAPIMock.implementMock(cratedMock)

			const memoryInfo = domain.getMemoryInformation()

			expect(memoryInfo).toEqual({
				RAMInGB: mockMemoryInfo.RAMInGB,
			})
		})
	})
})
