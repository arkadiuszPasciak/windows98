import { beforeEach, describe, expect, it, vi } from "vitest"
import { AudioButtonDomain } from "../../src/domain/domains"

const AudioContextMock = vi.fn().mockImplementation(() => ({
	createOscillator: vi.fn().mockReturnValue({
		connect: vi.fn(),
		start: vi.fn(),
		stop: vi.fn(),
	}),
	createGain: vi.fn().mockReturnValue({
		connect: vi.fn(),
		gain: {
			value: 1,
			setValueAtTime: vi.fn(),
		},
	}),
	createMediaElementSource: vi.fn(),
	createMediaStreamDestination: vi.fn(),
	createMediaStreamSource: vi.fn(),
	getOutputTimestamp: vi.fn(),
	baseLatency: 0,
	outputLatency: 0,
	destination: {},
	resume: vi.fn().mockResolvedValue(undefined),
	suspend: vi.fn().mockResolvedValue(undefined),
	close: vi.fn().mockResolvedValue(undefined),
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
}));

// TODO: Fix a problem - "AudioContext is not defined"
describe.skip("AudioButtonDomain", () => {
	beforeEach(() => {
		vi.stubGlobal("AudioContext", AudioContextMock)
	})

	it("should mute sound when toggleSound is called", () => {
		const audioButtonDomain = new AudioButtonDomain()
		audioButtonDomain.toggleSound()
		expect(audioButtonDomain.isMuted).toBe(true)

		const audioContext = new AudioContext()
		const gainNode = audioContext.createGain()
		expect(gainNode.gain.value).toBe(0)
	})

	it("should unmute sound when toggleSound is called again", () => {
		const audioButtonDomain = new AudioButtonDomain()
		audioButtonDomain.toggleSound()
		audioButtonDomain.toggleSound()
		expect(audioButtonDomain.isMuted).toBe(false)

		const audioContext = new AudioContext()
		const gainNode = audioContext.createGain()
		expect(gainNode.gain.value).toBe(1)
	})
})