import { beforeEach, describe, expect, it } from "vitest"
import { beaconAPIMock } from "../../../../../@test/vitest/mocks"
import { BeaconAPIRepository } from "../../src/data/repositories"

describe("BeaconAPIRepository", () => {
	const beaconRepository = new BeaconAPIRepository()

	beforeEach(() => {
		beaconAPIMock.implementMock()
	})

	it("should sendBeacon return boolean value", () => {
		const result = beaconRepository.sendBeacon("https://example.com")

		expect(typeof result).toBe("boolean")
	})
})
