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

		const audioButtonIconOff = await component.getByTestId(
			"ds-icon-audio-button-off",
		)
		expect(isMuted, "Audio and video elements are muted").toBe(true)
		expect(audioButtonIconOff).toBeVisible()

		await button.click()

		const isUnmuted = await component.evaluate(() => {
			const audioElement = document.querySelector("audio")
			const videoElement = document.querySelector("video")
			return !audioElement?.muted && !videoElement?.muted
		})
		const audioButtonIconOn = await component.getByTestId(
			"ds-icon-audio-button-on",
		)
		expect(isUnmuted, "Audio and video elements are unmuted").toBe(true)
		expect(audioButtonIconOn).toBeVisible()
	})
})
