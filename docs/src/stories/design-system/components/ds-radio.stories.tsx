import type { Meta, StoryObj } from "@storybook/react-vite"
import { DSRadio } from "@windows98/design-system"

const meta: Meta<typeof DSRadio> = {
	argTypes: {
		disabled: {
			control: {
				type: "boolean",
			},
		},
		id: {
			control: {
				type: "text",
			},
		},
		initialChecked: {
			control: {
				type: "boolean",
			},
		},
		name: {
			control: {
				type: "text",
			},
		},
		text: {
			control: {
				type: "object",
			},
		},
	},
	component: DSRadio,
	tags: ["autodocs"],
	title: "Design System/Components/DSRadio",
}

export default meta

type Story = StoryObj<typeof DSRadio>

export const Primary: Story = {
	args: {
		disabled: false,
		id: "storybook-radio",
		initialChecked: false,
		name: "storybook",
		text: { content: "Storybook Radio", visible: true },
		onChange: () => console.log("Radio button clicked"),
	},
}

export const Disabled: Story = {
	args: {
		...Primary.args,
		disabled: true,
	},
}

export const Checked: Story = {
	args: {
		...Primary.args,
		initialChecked: true,
	},
}

export const Group: Story = {
	render: () => {
		const radios = [
			{
				id: "radio-1",
				name: "group-1",
				text: { content: "Radio 1", visible: true },
				initialChecked: true,
			},
			{
				id: "radio-2",
				name: "group-1",
				text: { content: "Radio 2", visible: true },
				initialChecked: false,
			},
			{
				id: "radio-3",
				name: "group-1",
				text: { content: "Radio 3", visible: true },
				initialChecked: false,
			},
		]

		return (
			<div>
				{radios.map((props) => (
					<DSRadio
						key={props.id}
						{...props}
						onChange={() => console.log(`${props.id} clicked`)}
					/>
				))}
			</div>
		)
	},
}
