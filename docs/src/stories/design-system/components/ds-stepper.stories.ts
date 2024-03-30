import { DSStepper, type DSStepperProps } from "@windows98/design-system"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof DSStepper> = {
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
		modelValue: {
			control: {
				type: "number",
			},
		},
	},
	component: DSStepper,
	tags: ["autodocs"],
	title: "Design System/Components/DSStepper"
}

export default meta

type Story = StoryObj<typeof DSStepper>

export const Primary: Story = {
	args: {
		disabled: false,
		id: "storybook",
		modelValue: 10,
	} as DSStepperProps,
}

export const Disabled: Story = {
	args: {
		...Primary.args,
		disabled: true
	}
}
