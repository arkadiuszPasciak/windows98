import { expect, test } from "@playwright/experimental-ct-react"
import { AudioButtonView } from "../../src/ui/views"

test.describe("AudioButton", () => {
	test("should turn off and turn on audio", async ({ mount }) => {
		const component = await mount(<AudioButtonView />)
		const button = component.getByTestId("ma-audio-button-button")

		await component.evaluate(() => {
			const audioElement = document.createElement("audio")
			const videoElement = document.createElement("video")
			document.body.appendChild(audioElement)
			document.body.appendChild(videoElement)
		})

		await button.click()

		const isMuted = await component.evaluate(() => {
			const audioElement = document.querySelector("audio")
			const videoElement = document.querySelector("video")
			return audioElement?.muted && videoElement?.muted
		})
		expect(isMuted, "Audio and video elements are muted").toBe(true)

		await button.click()

		const isUnmuted = await component.evaluate(() => {
			const audioElement = document.querySelector("audio")
			const videoElement = document.querySelector("video")
			return !audioElement?.muted && !videoElement?.muted
		})
		expect(isUnmuted, "Audio and video elements are unmuted").toBe(true)
	})
})
