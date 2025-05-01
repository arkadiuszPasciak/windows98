import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
	title: "Micro Apps/Components/MFClock",
}

export default meta

type Story = StoryObj

export const Main: Story = {
	render: () => (
		// @ts-ignore
		<mf-clock />
	),
}
