import { beforeEach, describe, expect, it } from "vitest"
import { broadcastChannelAPIMock } from "../../../../../@test/vitest/mocks"
import { BroadcastChannelAPIRepository } from "../../src/data/repositories"

describe("BroadcastChannelAPIRepository", () => {
	const broadcastChannelRepository = new BroadcastChannelAPIRepository()

	beforeEach(() => {
		broadcastChannelAPIMock.implementMock()
	})

	it("should createBroadcastChannel return BroadcastChannel object", () => {
		const result = broadcastChannelRepository.createBroadcastChannel("test")
		expect(result).toBeInstanceOf(BroadcastChannel)
	})
})
