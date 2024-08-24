import App from "@APP|Bundles/AppBundle/Components/App.vue"
import vueI18n from "@windows98/i18n/configs/vue.config"
import { createPinia } from "pinia"
import { createApp } from "vue"

export default function mountApp(): void {
	const app = createApp(App)
	const pinia = createPinia()

	app.use(pinia)
	app.use(vueI18n).mount("#app")
}
