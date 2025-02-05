import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
	title: "Micro Apps/Components/MACalculator",
	parameters: {
		docs: {
			description: {
				story: "The ma-calculator is a micro app about a calculator.",
			},
		},
	},
}

export default meta

type Story = StoryObj

/**
 * Main story for the ma-calculator micro app component.
 * This story renders the ma-calculator component.
 */

export const Main: Story = {
	render: () => (
		// @ts-ignore
		<ma-calculator />
	),
}
