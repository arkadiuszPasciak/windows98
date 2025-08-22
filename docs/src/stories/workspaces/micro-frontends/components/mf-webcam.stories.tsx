import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFWebcam } from "@windows98/micro-frontends"

const meta: Meta<typeof MFWebcam> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFWebcam,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFWebcam",
}

export default meta

type Story = StoryObj<typeof MFWebcam>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Webcam closed"),
	},
}
