import { MSDate } from "@windows98/micro-services"
import { describe, expect, it, vi } from "vitest"
import { ClockDomain } from "../../src/domain/domains/clock.domain"

describe("ClockDomain", () => {
	it("should update time correctly", () => {
		const mockTime = "12:00 PM"
		const getTimeMock = vi.spyOn(MSDate, "getTime").mockReturnValue(mockTime)

		const clockDomain = new ClockDomain()
		clockDomain.updateTime()

		expect(clockDomain.time).toBe(mockTime)
		getTimeMock.mockRestore()
	})

	it("should not update time if the time is the same", () => {
		const mockTime = "12:00 PM"
		const getTimeMock = vi.spyOn(MSDate, "getTime").mockReturnValue(mockTime)

		const clockDomain = new ClockDomain()
		clockDomain.updateTime()
		expect(clockDomain.time).toBe(mockTime)

		clockDomain.updateTime()
		expect(clockDomain.time).toBe(mockTime)

		getTimeMock.mockRestore()
	})
})
