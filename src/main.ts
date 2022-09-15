import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@Configs/I18n/I18n.config'
import App from '@/App.vue'
import '@Assets/Styles/General/base.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n).mount('#app')
