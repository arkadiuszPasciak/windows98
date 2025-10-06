import { beforeEach, describe, expect, it } from "vitest"
import { batteryStatusAPIMock } from "../../../../../@test/vitest/mocks"
import { BatteryStatusAPIRepository } from "../../src/data/repositories"

describe("BatteryStatusAPIRepository", () => {
	const testData = {
		charging: false,
		level: 0.8,
		chargingTime: 120,
		dischargingTime: 240,
	}
	const batteryStatusRepository = new BatteryStatusAPIRepository()
	const batteryStatusMock = batteryStatusAPIMock.createMock(testData)

	beforeEach(() => {
		batteryStatusAPIMock.implementMock(batteryStatusMock)
	})

	it("getBattery", async () => {
		const result = await batteryStatusRepository.getBattery()
		expect(result).toEqual(batteryStatusMock)
	})
})
