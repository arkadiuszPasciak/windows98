import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFAudioButton } from "@windows98/micro-frontends"

const meta: Meta<typeof MFAudioButton> = {
	component: MFAudioButton,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFAudioButton",
}

export default meta

type Story = StoryObj<typeof MFAudioButton>

export const Main: Story = {
	args: {},
}
