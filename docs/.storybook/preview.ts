import DocumentationTemplate from '../src/configs/documentation-template.mdx';
import type { Preview } from "@storybook/react"

const preview: Preview = {
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
      order: [
        "Introduction",
        "Installation"
      ],
    },
    viewMode: "docs",
  },
}

export default preview
