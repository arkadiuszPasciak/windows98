import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
	title: "Micro Apps/Components/MATimezone",
}

export default meta

type Story = StoryObj

export const Main: Story = {
	render: () => (
		// @ts-ignore
		<ma-timezone />
	),
}
