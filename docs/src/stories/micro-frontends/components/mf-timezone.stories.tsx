import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
	title: "Micro Apps/Components/MFTimezone",
}

export default meta

type Story = StoryObj

export const Main: Story = {
	render: () => (
		// @ts-ignore
		<mf-timezone />
	),
}
