import type { Preview } from "@storybook/react"
import DocumentationTemplate from "../src/configs/documentation-template.mdx"
import "@windows98/design-system/index.css"

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
