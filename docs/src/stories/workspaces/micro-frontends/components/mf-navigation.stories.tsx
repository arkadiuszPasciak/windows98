import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFNavigation } from "@windows98/micro-frontends"

const meta: Meta<typeof MFNavigation> = {
	component: MFNavigation,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFNavigation",
}

export default meta

type Story = StoryObj<typeof MFNavigation>

export const Main: Story = {
	args: {},
}
