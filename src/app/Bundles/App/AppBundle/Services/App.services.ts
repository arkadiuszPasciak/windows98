import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@CONFIGS/i18n.config'
import App from '@APP|Bundles/AppBundle/Components/App.vue'

export default function mountApp(): void {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(i18n).mount('#app')
}
