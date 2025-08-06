import type { Preview } from "@storybook/react-vite"
import { themes } from "storybook/theming"
import DocumentationTemplate from "../src/configs/documentation-template.mdx"
import "@windows98/design-system/index.css"
import "@windows98/i18n/configs/react.config"

const preview: Preview = {
	decorators: [
		(Story) => {
			document.documentElement.setAttribute("theme", "light")

			return <Story />
		},
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			page: DocumentationTemplate,
			theme: themes.dark,
		},
		storySort: {
			order: ["Introduction", "Installation"],
		},
		viewMode: "docs",
	},
}

export default preview
