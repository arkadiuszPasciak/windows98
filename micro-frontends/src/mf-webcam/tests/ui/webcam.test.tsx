import { expect, test } from "@playwright/experimental-ct-react"
import { MFWebcam } from "../../src/ui/views"

test.describe("MFWebcam", () => {
	test("renders webcam video element", async ({ mount }) => {
		const component = await mount(<MFWebcam onCloseProgram={() => {}} />)

		const video = component.getByTestId("mf-webcam-video")
		await expect(video).toBeVisible()

		await expect(video).toHaveAttribute("autoplay", "")
	})
})
