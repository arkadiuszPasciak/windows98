import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@Configs/I18n.config'
import App from '@Bundles/AppBundle/Components/App.vue'

export function mountApp(): void {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(i18n).mount('#app')
}
