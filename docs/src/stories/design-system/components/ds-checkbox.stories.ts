import type { Meta, StoryObj } from "@storybook/react"
import { DSCheckbox, type DSCheckboxProps } from "@windows98/design-system"

const meta: Meta<typeof DSCheckbox> = {
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
		initialChecked: {
			control: {
				type: "boolean",
			},
		},
		name: {
			control: {
				type: "text",
			},
		},
		readonly: {
			control: {
				type: "boolean",
			},
		},
		text: {
			control: {
				type: "text",
			},
		},
	},
	component: DSCheckbox,
	tags: ["autodocs"],
	title: "Design System/Components/DSCheckbox",
}

export default meta

type Story = StoryObj<typeof DSCheckbox>

export const Primary: Story = {
	args: {
		disabled: false,
		id: "storybook-checkbox",
		initialChecked: false,
		name: "storybook",
		readonly: false,
		text: "Storybook Checkbox",
		onChange: (checked: boolean) =>
			console.log(`Checkbox is now ${checked ? "checked" : "unchecked"}`),
	} as DSCheckboxProps,
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
		initialChecked: true,
	},
}

export const Checked: Story = {
	args: {
		...Primary.args,
		initialChecked: true,
	},
}
