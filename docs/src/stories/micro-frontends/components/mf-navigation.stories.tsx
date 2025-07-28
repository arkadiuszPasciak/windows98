import type { Meta, StoryObj } from "@storybook/react-vite"

const meta: Meta = {
	title: "Micro Frontends/Components/MFNavigation",
}

export default meta

type Story = StoryObj

export const Main: Story = {
	render: () => (
		// @ts-ignore
		<mf-navigation />
	),
}
