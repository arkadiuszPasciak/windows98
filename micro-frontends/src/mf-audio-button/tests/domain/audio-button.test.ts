import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { AudioButtonDomain } from "../../src/domain/domains"

describe("AudioButtonDomain", () => {
	let audioButtonDomain: AudioButtonDomain
	let audioElement: HTMLAudioElement
	let videoElement: HTMLVideoElement

	beforeEach(() => {
		audioButtonDomain = new AudioButtonDomain()
		audioElement = document.createElement("audio")
		videoElement = document.createElement("video")
		document.body.appendChild(audioElement)
		document.body.appendChild(videoElement)
	})

	afterEach(() => {
		document.body.removeChild(audioElement)
		document.body.removeChild(videoElement)
	})

	it("should mute sound when toggleSound is called", async () => {
		await audioButtonDomain.toggleSound()
		expect(audioButtonDomain.isMuted).toBe(true)
		expect(audioElement.muted).toBe(true)
		expect(videoElement.muted).toBe(true)
	})

	it("should unmute sound when toggleSound is called again", async () => {
		await audioButtonDomain.toggleSound()
		await audioButtonDomain.toggleSound()
		expect(audioButtonDomain.isMuted).toBe(false)
		expect(audioElement.muted).toBe(false)
		expect(videoElement.muted).toBe(false)
	})
})
