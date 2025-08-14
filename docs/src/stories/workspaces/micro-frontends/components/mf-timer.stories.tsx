import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFTimer } from "@windows98/micro-frontends"

const meta: Meta<typeof MFTimer> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFTimer,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFTimer",
}

export default meta

type Story = StoryObj<typeof MFTimer>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Timer closed"),
	},
}
