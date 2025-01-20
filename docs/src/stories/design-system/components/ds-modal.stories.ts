import type { Meta, StoryObj } from "@storybook/react"
import { DSModal } from "@windows98/design-system"

const meta: Meta<typeof DSModal> = {
	argTypes: {
		id: {
			control: {
				type: "text",
			},
		},
		title: {
			control: {
				type: "text",
			},
		},
		width: {
			control: {
				type: "text",
			},
		},
		height: {
			control: {
				type: "text",
			},
		},
		resizeWindow: {
			control: {
				type: "boolean",
			},
		},
		moveWindow: {
			control: {
				type: "boolean",
			},
		},
		navigation: {
			control: {
				type: "object",
			},
			defaultValue: [
				{ name: "NavItem1", onClick: () => console.log("NavItem1 clicked") },
				{ name: "NavItem2", onClick: () => console.log("NavItem2 clicked") },
			],
		},
		children: {
			control: {
				type: "text",
			},
		},
	},
	component: DSModal,
	tags: ["autodocs"],
	title: "Design System/Components/DSModal",
}

export default meta

type Story = StoryObj<typeof DSModal>

export const Default: Story = {
	args: {
		id: "storybook-modal",
		title: "Storybook Modal",
		width: "450px",
		height: "150px",
		resizeWindow: true,
		moveWindow: true,
		children: "This is a modal content",
		navigation: [
			{
				name: "test1",
				onClick: () => {},
			},
			{
				name: "test2",
				onClick: () => {},
			},
		],
	},
}
