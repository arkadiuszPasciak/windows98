import { DSText, type DSTextProps } from "@windows98/design-system"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof DSText> = {
	argTypes: {
		id: {
			control: {
				type: "text",
			},
		},
		text: {
			control: {
				type: "text",
			},
		},
	},
	component: DSText,
	tags: ["autodocs"],
	title: "Design System/Components/DSText"
}

export default meta

type Story = StoryObj<typeof DSText>

export const Primary: Story = {
	args: {
		id: "storybook",
		text: "storybook"
	} as DSTextProps,
}
