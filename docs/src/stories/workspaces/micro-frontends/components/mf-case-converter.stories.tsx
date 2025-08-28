import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFCaseConverter } from "@windows98/micro-frontends"

const meta: Meta<typeof MFCaseConverter> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFCaseConverter,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFCaseConverter",
}

export default meta

type Story = StoryObj<typeof MFCaseConverter>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Case Converter closed"),
	},
}
