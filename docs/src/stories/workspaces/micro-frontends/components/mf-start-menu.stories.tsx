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
	title: "Workspaces/Micro Frontends/Components/MFStartMenu",
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
				// @ts-expect-error
				type: "program",
				id: "settings",
			},
			{
				// @ts-expect-error
				type: "group",
				id: "programs",
				programs: [
					{
						// @ts-expect-error
						type: "group",
						id: "accessories",
						programs: [
							{
								// @ts-expect-error
								type: "program",
								id: "calculator",
							},
							{
								// @ts-expect-error
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
