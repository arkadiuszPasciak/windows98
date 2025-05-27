import type { Meta, StoryObj } from "@storybook/react"
import { DSTabs } from "@windows98/design-system"

const TabOne = () => <div>Tab One Content Design System</div>
const TabTwo = () => <div>Tab Two Content Micro Frontend</div>

const meta: Meta<typeof DSTabs> = {
	argTypes: {
		id: {
			control: {
				type: "text",
			},
		},
		tabs: {
			control: { disable: true },
		},
	},
	component: DSTabs,
	tags: ["autodocs"],
	title: "Design System/Components/DSTabs",
}

export default meta

type Story = StoryObj<typeof DSTabs>

export const Primary: Story = {
	args: {
		id: "storybook-tabs",
		tabs: [
			{ id: "design-system", title: "Design System", component: TabOne },
			{ id: "micro-frontends", title: "Micro Frontends", component: TabTwo },
		],
	},
}
