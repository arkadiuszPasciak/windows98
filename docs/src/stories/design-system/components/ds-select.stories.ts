import type { Meta, StoryObj } from "@storybook/react"
import { DSSelect, type DSSelectProps } from "@windows98/design-system"

const meta: Meta<typeof DSSelect> = {
	argTypes: {
		disabled: {
			control: {
				type: "boolean",
			},
		},
		id: {
			control: {
				type: "text",
			},
		},
		labelName: {
			control: {
				type: "text",
			},
		},
		modelValue: {
			control: {
				type: "text",
			},
		},
		options: {
			control: {
				type: "object",
			},
		},
		required: {
			control: {
				type: "boolean",
			},
		},
		wrapperLayout: {
			control: {
				type: "select",
				options: ["horizontal", "vertical"],
			},
		},
	},
	component: DSSelect,
	tags: ["autodocs"],
	title: "Design System/Components/DSSelect",
}

export default meta

type Story = StoryObj<typeof DSSelect>

export const Primary: Story = {
	args: {
		disabled: false,
		id: "storybook",
		labelName: "Storybook",
		modelValue: "storybook",
		options: [
			{
				value: "storybook",
				name: "Storybook",
			},
			{
				value: "storybook-ui",
				name: "Storybook UI",
			},
		],
		required: false,
		wrapperLayout: "horizontal",
	} as DSSelectProps,
}

export const Disabled: Story = {
	args: {
		...Primary.args,
		disabled: true,
	},
}

export const Horizontal: Story = {
	args: {
		...Primary.args,
		wrapperLayout: "horizontal",
	},
}

export const Vertical: Story = {
	args: {
		...Primary.args,
		wrapperLayout: "vertical",
	},
}
