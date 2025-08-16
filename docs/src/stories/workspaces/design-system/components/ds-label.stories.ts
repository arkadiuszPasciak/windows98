import type { Meta, StoryObj } from "@storybook/react-vite"
import { DSLabel, type DSLabelProps } from "@windows98/design-system"

const meta: Meta<typeof DSLabel> = {
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
	component: DSLabel,
	tags: ["autodocs"],
	title: "Workspaces/Design System/Components/DSLabel",
}

export default meta

type Story = StoryObj<typeof DSLabel>

export const Primary: Story = {
	args: {
		id: "storybook-label",
		text: "Label Text",
	} as DSLabelProps,
}

export const WithLongText: Story = {
	args: {
		id: "long-label",
		text: "This is a very long label text that demonstrates how the component handles longer content",
	} as DSLabelProps,
}

export const WithShortText: Story = {
	args: {
		id: "short-label",
		text: "Short",
	} as DSLabelProps,
}
