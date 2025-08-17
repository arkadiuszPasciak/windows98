import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFColorGenerator } from "@windows98/micro-frontends"

const meta: Meta<typeof MFColorGenerator> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFColorGenerator,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFColorGenerator",
}

export default meta

type Story = StoryObj<typeof MFColorGenerator>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Color Generator closed"),
	},
}
