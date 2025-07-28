import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta = {
	title: "Micro Frontends/Components/MFClock",
}

export default meta

type Story = StoryObj

export const Main: Story = {
	render: () => (
		// @ts-ignore
		<mf-clock />
	),
}
