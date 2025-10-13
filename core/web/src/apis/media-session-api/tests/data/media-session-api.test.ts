import { beforeAll, describe, expect, it } from "vitest"
import { vi } from "vitest"
import { mediaSessionAPIMock } from "../../../../../@test/vitest/mocks"
import { MediaSessionAPIRepository } from "../../src/data/repositories"

describe("MediaSessionAPIRepository", () => {
	const testData = {
		metadata: {
			album: "Test Album",
			artist: "Test Artist",
			artwork: [
				{
					src: "test-artwork-url",
					sizes: "512x512",
					type: "image/png",
				},
			],
			title: "Test Title",
		},
		playbackState: "playing" as MediaSessionPlaybackState,
	}
	const mediaSessionMock = mediaSessionAPIMock.createMock(
		testData.metadata,
		testData.playbackState,
	)
	const mediaSessionAPIRepository = new MediaSessionAPIRepository()

	beforeAll(() => {
		mediaSessionAPIMock.implementMock(mediaSessionMock)
	})

	it("should get metadata from mediaSession", () => {
		const metadata = mediaSessionAPIRepository.getMetadata()
		expect(metadata).toEqual(testData.metadata)
	})

	it("should get playbackState from mediaSession", () => {
		const state = mediaSessionAPIRepository.getPlaybackState()
		expect(state).toBe(testData.playbackState)
	})

	it("should set action handler", () => {
		const handler = vi.fn()
		mediaSessionAPIRepository.setActionHandler("play", handler)
		expect(window.navigator.mediaSession.setActionHandler).toHaveBeenCalledWith(
			"play",
			handler,
		)
	})

	it("should set position state", () => {
		const state = { duration: 100, position: 10, playbackRate: 1 }
		mediaSessionAPIRepository.setPositionState(state)
		expect(window.navigator.mediaSession.setPositionState).toHaveBeenCalledWith(
			state,
		)
	})
})
