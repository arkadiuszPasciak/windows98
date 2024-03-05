import { createApp } from "vue"
import { createPinia } from "pinia"
import vueI18n from "@windows98/i18n/configs/vue.config"
import App from "@APP|Bundles/AppBundle/Components/App.vue"

export default function mountApp(): void {
	const app = createApp(App)
	const pinia = createPinia()

	app.use(pinia)
	// @TODO - add proper typing
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	app.use(vueI18n).mount("#app")
}
