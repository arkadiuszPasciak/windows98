import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFClock } from "@windows98/micro-frontends"

const meta: Meta<typeof MFClock> = {
	component: MFClock,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFClock",
}

export default meta

type Story = StoryObj<typeof MFClock>

export const Main: Story = {
	args: {},
}
