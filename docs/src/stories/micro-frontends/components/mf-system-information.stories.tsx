import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFSystemInformation } from "@windows98/micro-frontends"

const meta: Meta<typeof MFSystemInformation> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFSystemInformation,
	tags: ["autodocs"],
	title: "Micro Frontends/Components/MFSystemInformation",
}

export default meta

type Story = StoryObj<typeof MFSystemInformation>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("System Information closed"),
	},
}
