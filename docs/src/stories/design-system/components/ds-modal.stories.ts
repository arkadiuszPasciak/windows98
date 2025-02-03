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
		tabs: {
			control: {
				type: "object",
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

export const WithTabs: Story = {
	args: {
		id: "storybook-modal-tabs",
		title: "Storybook Modal with Tabs",
		width: "450px",
		height: "300px",
		resizeWindow: true,
		moveWindow: true,
		tabs: {
			initialIndex: 0,
			tabs: [
				{
					title: "Tab 1",
					component: "<div>Content for Tab 1</div>",
				},
				{
					title: "Tab 2",
					component: "<div>Content for Tab 2 </div>",
				},
				{
					title: "Tab 3",
					component: "<div>Content for Tab 3 </div>",
				},
			],
		},
	},
}
