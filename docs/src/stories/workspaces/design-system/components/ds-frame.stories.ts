import type { Meta, StoryObj } from "@storybook/react-vite"
import { DSFrame, type DSFrameProps } from "@windows98/design-system"

const meta: Meta<typeof DSFrame> = {
	argTypes: {
		children: {
			control: "text",
		},
		id: {
			control: "text",
		},
		title: {
			control: "text",
		},
	},
	component: DSFrame,
	tags: ["autodocs"],
	title: "Workspaces/Design System/Components/DSFrame",
}

export default meta

type Story = StoryObj<typeof DSFrame>

export const Primary: Story = {
	args: {
		children: "Content of the frame",
		id: "story-frame",
		title: "Title of the frame",
	} as DSFrameProps,
}
