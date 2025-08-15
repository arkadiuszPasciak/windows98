import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFNotepad } from "@windows98/micro-frontends"

const meta: Meta<typeof MFNotepad> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFNotepad,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFNotepad",
}

export default meta

type Story = StoryObj<typeof MFNotepad>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Notepad closed"),
	},
}
