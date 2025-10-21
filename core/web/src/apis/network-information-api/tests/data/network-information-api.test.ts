import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest"
import { networkInformationAPIMock } from "../../../../../@test/vitest/mocks"
import type { NetworkChangeEvent } from "../../src/data/models"
import { NetworkInformationAPIRepository } from "../../src/data/repositories"

describe("NetworkInformationAPIRepository", () => {
	let networkInformationRepository: NetworkInformationAPIRepository

	beforeAll(() => {
		networkInformationAPIMock.implementMock()
	})

	afterEach(() => {
		networkInformationAPIMock.reset()
	})

	beforeEach(() => {
		networkInformationRepository = new NetworkInformationAPIRepository()
	})

	it("reads connection properties", () => {
		expect(networkInformationRepository.type).toBe("wifi")
		expect(networkInformationRepository.effectiveType).toBe("4g")
		expect(networkInformationRepository.downlink).toBe(10)
		expect(networkInformationRepository.downlinkMax).toBe(20)
		expect(networkInformationRepository.rtt).toBe(50)
		expect(networkInformationRepository.saveData).toBe(false)
	})

	it("onChange receives updates and offChange removes listener", () => {
		const changes: NetworkChangeEvent[] = []

		const listener = (event: NetworkChangeEvent) => {
			changes.push(event)
		}

		networkInformationRepository.onChange(listener)

		networkInformationAPIMock.triggerChange({
			type: "cellular",
			downlink: 1,
			rtt: 300,
		})

		expect(changes.length).toBe(1)
		expect(changes[0]).toHaveProperty("current")
		expect(changes[0].current.type).toBe("cellular")

		networkInformationRepository.offChange(listener)
		networkInformationAPIMock.triggerChange({ type: "wifi", downlink: 5 })

		expect(changes.length).toBe(1)
	})
})
