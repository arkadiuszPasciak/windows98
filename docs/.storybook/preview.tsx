import DocumentationTemplate from '../src/configs/documentation-template.mdx';
import type { Preview } from "@storybook/react"
import "@windows98/design-system/variables.config.css"
import "@windows98/micro-apps"

const preview: Preview = {
  decorators: [
    (Story) => {
      document.documentElement.classList.add('theme-light');

      return <Story />;
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
      order: [
        "Introduction",
        "Installation"
      ],
    },
    viewMode: "docs",
  },
}

export default preview
