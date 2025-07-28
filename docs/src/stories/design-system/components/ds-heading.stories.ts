import type { Meta, StoryObj } from "@storybook/react-vite"
import { DSHeading } from "@windows98/design-system"

const meta: Meta<typeof DSHeading> = {
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
		type: {
			control: {
				type: "select",
				options: ["h1", "h2", "h3", "h4", "h5", "h6"],
			},
		},
	},
	component: DSHeading,
	tags: ["autodocs"],
	title: "Design System/Components/DSHeading",
}

export default meta

type Story = StoryObj<typeof DSHeading>

export const Primary: Story = {
	args: {
		id: "storybook-heading",
		text: "Storybook Heading",
		type: "h1",
	},
}
