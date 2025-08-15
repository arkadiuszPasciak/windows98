import type { Meta, StoryObj } from "@storybook/react-vite"
import { MSSaveFile } from "@windows98/micro-frontends"

const meta: Meta<typeof MSSaveFile> = {
	argTypes: {
		contentFile: {
			control: {
				type: "text",
			},
		},
		fileTypes: {
			control: {
				type: "object",
			},
		},
		onCloseModal: {
			action: "closed",
			control: false,
		},
	},
	component: MSSaveFile,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MSSaveFile",
}

export default meta

type Story = StoryObj<typeof MSSaveFile>

export const Main: Story = {
	args: {
		contentFile: "This is sample file content for the save dialog.",
		fileTypes: [".txt", ".md", ".js"],
		onCloseModal: () => console.log("Save file modal closed"),
	},
}
