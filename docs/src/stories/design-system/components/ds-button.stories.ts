import type { Meta, StoryObj } from "@storybook/react-vite"
import { DSButton } from "@windows98/design-system"

const meta: Meta<typeof DSButton> = {
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
		size: {
			control: {
				type: "select",
				options: ["small", "medium"],
			},
		},
		text: {
			control: {
				type: "text",
			},
		},
		isTextVisible: {
			control: {
				type: "boolean",
			},
		},
		iconLeft: {
			control: {
				type: "text",
			},
		},
		iconRight: {
			control: {
				type: "text",
			},
		},
	},
	component: DSButton,
	tags: ["autodocs"],
	title: "Design System/Components/DSButton",
}

export default meta

type Story = StoryObj<typeof DSButton>

export const Primary: Story = {
	args: {
		disabled: false,
		id: "storybook-button",
		size: "medium",
		text: "Storybook Button",
		isTextVisible: true,
		onClick: () => console.log("Button clicked"),
	},
}

export const Disabled: Story = {
	args: {
		...Primary.args,
		disabled: true,
	},
}

export const Small: Story = {
	args: {
		...Primary.args,
		size: "small",
		text: "🔍",
	},
}

export const WithIcons: Story = {
	args: {
		...Primary.args,
		iconLeft: "🔍",
		iconRight: "➡️",
	},
}
