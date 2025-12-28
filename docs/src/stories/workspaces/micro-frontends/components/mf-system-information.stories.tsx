import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFSystemInformation } from "@windows98/micro-frontends"

const meta: Meta<typeof MFSystemInformation> = {
	argTypes: {
		sections: { control: "object" },
	},
	component: MFSystemInformation,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFSystemInformation",
}

export default meta

type Story = StoryObj<typeof MFSystemInformation>

export const Main: Story = {
	args: {
		sections: [
			{
				name: "battery",
				items: [
					{
						label: "level",
						value: "85%",
					},
					{
						label: "status",
						value: "charging",
					},
				],
			},
			{
				name: "browser",
				items: [
					{
						label: "name",
						value: "chrome",
					},
				],
			},
		],
	},
}
