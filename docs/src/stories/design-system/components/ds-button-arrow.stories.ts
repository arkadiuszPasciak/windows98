import type { Meta, StoryObj } from "@storybook/react-vite"
import { DSButtonArrow } from "@windows98/design-system"

const meta: Meta<typeof DSButtonArrow> = {
	argTypes: {
		ariaLabel: {
			control: {
				type: "text",
			},
		},
		direction: {
			control: {
				type: "select",
				options: ["top", "bottom"],
			},
		},
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
	},
	component: DSButtonArrow,
	tags: ["autodocs"],
	title: "Design System/Components/DSButtonArrow",
}

export default meta

type Story = StoryObj<typeof DSButtonArrow>

export const Primary: Story = {
	args: {
		ariaLabel: "Arrow Button",
		direction: "top",
		disabled: false,
		id: "storybook-arrow-button",
		size: "medium",
		onClick: () => console.log("Arrow button clicked"),
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
	},
}

export const BottomDirection: Story = {
	args: {
		...Primary.args,
		direction: "bottom",
	},
}
