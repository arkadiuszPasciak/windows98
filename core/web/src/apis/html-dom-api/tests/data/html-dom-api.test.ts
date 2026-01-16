import { afterAll, beforeAll, describe, expect, it } from "vitest"
import { htmlDOMAPIMock } from "../../../../../@test/vitest/mocks"
import { HTMLDOMAPIRepository } from "../../src/data/repositories"

describe("HTMLDOMAPIRepository", () => {
	let htmlDOMAPIRepository: HTMLDOMAPIRepository

	afterAll(() => {
		htmlDOMAPIMock.reset()
	})

	beforeAll(() => {
		htmlDOMAPIMock.implementMock()
		htmlDOMAPIRepository = new HTMLDOMAPIRepository()
	})

	it("returns a new audio element", () => {
		const testSrc = "test-src"
		const audioElement = htmlDOMAPIRepository.createNewAudio(testSrc)

		expect(audioElement.src, "Audio src should be set correctly").toBe(testSrc)

		audioElement.play()
		expect(audioElement.paused, "Audio should not be paused after play()").toBe(
			false,
		)
		audioElement.pause()
		expect(audioElement.paused, "Audio should be paused after pause()").toBe(
			true,
		)

		audioElement.volume = 0.5
		expect(
			audioElement.volume,
			"Audio volume should be set correctly",
		).toBeCloseTo(0.5)
		audioElement.muted = true
		expect(audioElement.muted, "Audio should be muted").toBe(true)

		let canPlayTriggered = false
		audioElement.oncanplay = () => {
			canPlayTriggered = true
		}
		audioElement.src = "another-src"
		setTimeout(() => {
			expect(canPlayTriggered).toBe(true)
		}, 10)
	})

	it("returns a new image element", () => {
		const width = 100
		const height = 200
		const imageElement = htmlDOMAPIRepository.createNewImage(width, height)

		expect(imageElement.width, "Image width should be set correctly").toBe(
			width,
		)
		expect(imageElement.height, "Image height should be set correctly").toBe(
			height,
		)
	})
})
