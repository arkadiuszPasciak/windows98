import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFShutdown } from "@windows98/micro-frontends"

const meta: Meta<typeof MFShutdown> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFShutdown,
	tags: ["autodocs"],
	title: "Micro Frontends/Components/MFShutdown",
}

export default meta

type Story = StoryObj<typeof MFShutdown>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Shutdown closed"),
	},
}
