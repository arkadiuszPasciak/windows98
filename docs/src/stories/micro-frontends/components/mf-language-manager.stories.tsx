import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFLanguageManager } from "@windows98/micro-frontends"

const meta: Meta<typeof MFLanguageManager> = {
	component: MFLanguageManager,
	tags: ["autodocs"],
	title: "Micro Frontends/Components/MFLanguageManager",
}

export default meta

type Story = StoryObj<typeof MFLanguageManager>

export const Main: Story = {
	args: {
		languages: ["en", "de", "pl"],
		onChangeLanguage: (language) =>
			console.log(`Language changed to: ${language}`),
	},
}
