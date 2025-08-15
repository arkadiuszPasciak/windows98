import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFTimezone } from "@windows98/micro-frontends"

const meta: Meta<typeof MFTimezone> = {
	component: MFTimezone,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFTimezone",
}

export default meta

type Story = StoryObj<typeof MFTimezone>

export const Primary: Story = {
	args: {},
}
