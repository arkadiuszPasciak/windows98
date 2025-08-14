import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFPulpit } from "@windows98/micro-frontends"

const meta: Meta<typeof MFPulpit> = {
	component: MFPulpit,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFPulpit",
}

export default meta

type Story = StoryObj<typeof MFPulpit>

export const Main: Story = {
	args: {
		items: [
			{
				name: "my-computer",
			},
			{
				name: "recycle",
			},
		],
	},
}
