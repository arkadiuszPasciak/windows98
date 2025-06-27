import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
			  @import '@windows98/design-system/index.config.scss';
			`,
			},
		},
	},
	plugins: [react()],
})
