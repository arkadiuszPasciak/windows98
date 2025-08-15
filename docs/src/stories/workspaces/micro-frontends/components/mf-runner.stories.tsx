import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFRunner } from "@windows98/micro-frontends"

const meta: Meta<typeof MFRunner> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
		onRunProgram: {
			action: "run program",
			control: false,
		},
		programs: {
			control: {
				type: "object",
			},
		},
	},
	component: MFRunner,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFRunner",
}

export default meta

type Story = StoryObj<typeof MFRunner>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Runner closed"),
		onRunProgram: (program: string) =>
			console.log(`Running program: ${program}`),
		programs: [{ notepad: [""] }, { calculator: [""] }, { paint: [""] }],
	},
}
