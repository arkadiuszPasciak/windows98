import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFCalendar } from "@windows98/micro-frontends"

const meta: Meta<typeof MFCalendar> = {
	component: MFCalendar,
	tags: ["autodocs"],
	title: "Micro Frontends/Components/MFCalendar",
}

export default meta

type Story = StoryObj<typeof MFCalendar>

export const Main: Story = {
	args: {},
}
