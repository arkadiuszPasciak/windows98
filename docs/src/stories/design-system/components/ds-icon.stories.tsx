import type { Meta, StoryObj } from "@storybook/react"
import {
	DSIconCheckboxDisabledSVG,
	DSIconCheckboxSVG,
	DSIconCloseSVG,
	DSIconRadioSVG,
	DSIconSelectButton,
} from "@windows98/design-system"

const meta: Meta = {
	title: "Design System/Components/DSIcon",
	tags: ["autodocs"],
}

export default meta

type Story = StoryObj

const icons = [
	{ name: "Checkbox Icon", component: DSIconCheckboxSVG },
	{ name: "Checkbox Disabled Icon", component: DSIconCheckboxDisabledSVG },
	{ name: "Close Icon", component: DSIconCloseSVG },
	{
		name: "Radio Icon (Checked)",
		component: () => <DSIconRadioSVG isChecked={true} />,
	},
	{
		name: "Radio Icon (Unchecked)",
		component: () => <DSIconRadioSVG isChecked={false} />,
	},
	{ name: "Select Button Icon", component: DSIconSelectButton },
]

export const AllIcons: Story = {
	render: () => (
		<div>
			{icons.map((icon) => (
				<div key={icon.name}>
					<h3>{icon.name}</h3>
					<icon.component />
				</div>
			))}
		</div>
	),
}
