import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFCalculator } from "@windows98/micro-frontends"

const meta: Meta<typeof MFCalculator> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFCalculator,
	tags: ["autodocs"],
	title: "Micro Frontends/Components/MFCalculator",
}

export default meta

type Story = StoryObj<typeof MFCalculator>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Calculator closed"),
	},
}
