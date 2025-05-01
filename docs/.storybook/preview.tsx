import type { Preview } from "@storybook/react"
import DocumentationTemplate from "../src/configs/documentation-template.mdx"
import "@windows98/design-system/variables.config.css"
import "@windows98/micro-frontends"

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
		},
		storySort: {
			order: ["Introduction", "Installation"],
		},
		viewMode: "docs",
	},
}

export default preview
