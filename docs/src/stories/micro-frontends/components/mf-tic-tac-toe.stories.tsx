import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFTicTacToe } from "@windows98/micro-frontends"

const meta: Meta<typeof MFTicTacToe> = {
	argTypes: {
		onCloseProgram: {
			action: "closed",
			control: false,
		},
	},
	component: MFTicTacToe,
	tags: ["autodocs"],
	title: "Micro Frontends/Components/MFTicTacToe",
}

export default meta

type Story = StoryObj<typeof MFTicTacToe>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("TicTacToe closed"),
	},
}
