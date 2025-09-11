import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFQRCodeGenerator } from "@windows98/micro-frontends"

const meta: Meta<typeof MFQRCodeGenerator> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFQRCodeGenerator,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFQRCodeGenerator",
}

export default meta

type Story = StoryObj<typeof MFQRCodeGenerator>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("QR Code Generator closed"),
	},
}
