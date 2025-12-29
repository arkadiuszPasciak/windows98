import type { Meta, StoryObj } from "@storybook/react-vite"
import { MFSettings } from "@windows98/micro-frontends"

const meta: Meta<typeof MFSettings> = {
	argTypes: {
		generalInformation: {
			control: {
				type: "object",
			},
		},
		languages: {
			control: {
				type: "object",
			},
		},
		onChangeLanguage: {
			action: "language changed",
			control: false,
		},
		onChangeTheme: {
			action: "theme changed",
			control: false,
		},
		onCloseProgram: {
			action: "closed",
			control: false,
		},
		themes: {
			control: {
				type: "object",
			},
		},
	},
	component: MFSettings,
	tags: ["autodocs"],
	title: "Workspaces/Micro Frontends/Components/MFSettings",
}

export default meta

type Story = StoryObj<typeof MFSettings>

export const Main: Story = {
	args: {
		onCloseProgram: () => console.log("Settings closed"),
		languages: ["en", "de", "pl"],
		onChangeLanguage: (language: string) =>
			console.log(`Language changed to: ${language}`),
		themes: ["classic", "modern", "dark"],
		onChangeTheme: (theme: string) => console.log(`Theme changed to: ${theme}`),
		generalInformation: [
			{
				name: "battery",
				items: [
					{
						label: "level",
						value: "85%",
					},
					{
						label: "status",
						value: "charging",
					},
				],
			},
			{
				name: "browser",
				items: [
					{
						label: "name",
						value: "chrome",
					},
				],
			},
		],
	},
}
