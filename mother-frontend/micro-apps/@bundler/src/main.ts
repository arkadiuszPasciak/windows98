import { createApp } from 'vue'
import Observer from 'mobx-vue-lite'
import vueI18n from '@windows98/i18n/configs/vue.config'
import Calendar from '../../calendar/src/ui/views/calendar.view.vue'
import '@windows98/design-system/base.config.css'

const app = createApp(Calendar)

app.use(vueI18n)
app.use(Observer)
app.mount('#app')
