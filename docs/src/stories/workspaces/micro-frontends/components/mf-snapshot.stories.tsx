import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFSnapshot } from "@windows98/micro-frontends"

const createVideoElement = (): HTMLVideoElement => {
	const video = document.createElement("video")

	video.width = 320
	video.height = 240
	Object.defineProperty(video, "videoWidth", { value: 320 })
	Object.defineProperty(video, "videoHeight", { value: 240 })
	Object.defineProperty(video, "readyState", { value: 4 })

	const canvas = document.createElement("canvas")
	canvas.width = 320
	canvas.height = 240

	const context = canvas.getContext("2d")

	if (context) {
		context.fillStyle = "red"
		context.fillRect(0, 0, 320, 240)
		video.src = canvas.toDataURL()
	}

	return video
}

const meta: Meta<typeof MFSnapshot> = {
	component: MFSnapshot,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFSnapshot",
}

export default meta

type Story = StoryObj<typeof MFSnapshot>

export const Main: Story = {
	args: {
		htmlVideoElement: createVideoElement(),
	},
}
