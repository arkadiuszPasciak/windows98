import type { Meta, StoryObj } from "@storybook/react"
import { DSInput, type DSInputProps } from "@windows98/design-system"

const meta: Meta<typeof DSInput> = {
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
		initialValue: {
			control: {
				type: "text",
			},
		},
		labelName: {
			control: {
				type: "text",
			},
		},
		max: {
			control: {
				type: "number",
			},
		},
		min: {
			control: {
				type: "number",
			},
		},
		readonly: {
			control: {
				type: "boolean",
			},
		},
		type: {
			control: {
				type: "select",
				options: ["text", "password", "email", "number"],
			},
		},
		wrapperLayout: {
			control: {
				type: "select",
				options: ["horizontal", "vertical"],
			},
		},
	},
	component: DSInput,
	tags: ["autodocs"],
	title: "Design System/Components/DSInput",
}

export default meta

type Story = StoryObj<typeof DSInput>

export const Primary: Story = {
	args: {
		disabled: false,
		id: "storybook",
		initialValue: "Hello, World!",
		labelName: "Storybook",
		readonly: false,
		type: "text",
		wrapperLayout: "vertical",
	} as DSInputProps,
}

export const Disabled: Story = {
	args: {
		...Primary.args,
		disabled: true,
	},
}

export const Readonly: Story = {
	args: {
		...Primary.args,
		readonly: true,
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
