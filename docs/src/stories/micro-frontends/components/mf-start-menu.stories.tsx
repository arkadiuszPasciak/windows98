import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFStartMenu } from "@windows98/micro-frontends"

const meta: Meta<typeof MFStartMenu> = {
	argTypes: {
		onRunProgram: {
			action: "run program",
			control: false,
		},
		menuItems: {
			control: {
				type: "object",
			},
		},
	},
	component: MFStartMenu,
	tags: ["autodocs"],
	title: "Micro Frontends/Components/MFStartMenu",
}

export default meta

type Story = StoryObj<typeof MFStartMenu>

export const Main: Story = {
	args: {
		onRunProgram: (program: string) =>
			console.log(`Running program: ${program}`),
		menuItems: [
			{
				// TODO: Fix this enum to type union
				// @ts-ignore
				type: "program",
				id: "settings",
			},
			{
				// @ts-ignore
				type: "group",
				id: "programs",
				programs: [
					{
						// @ts-ignore
						type: "group",
						id: "accessories",
						programs: [
							{
								// @ts-ignore
								type: "program",
								id: "calculator",
							},
							{
								// @ts-ignore
								type: "program",
								id: "notepad",
							},
						],
					},
				],
			},
		],
	},
}
