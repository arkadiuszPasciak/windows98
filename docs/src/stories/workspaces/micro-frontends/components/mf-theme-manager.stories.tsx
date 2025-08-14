import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFThemeManager } from "@windows98/micro-frontends"

const meta: Meta<typeof MFThemeManager> = {
	component: MFThemeManager,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFThemeManager",
}

export default meta

type Story = StoryObj<typeof MFThemeManager>

export const Main: Story = {
	args: {
		themes: ["light", "dark"],
		onChangeTheme: (theme) => console.log(`Theme changed to: ${theme}`),
	},
}
