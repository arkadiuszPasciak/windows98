import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
	title: "Micro Apps/Components/MACalendar",
}

export default meta

type Story = StoryObj

export const Main: Story = {
	render: () => (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<ma-calendar></ma-calendar>
	),
}
