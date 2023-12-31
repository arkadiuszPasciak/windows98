import { createApp } from 'vue'
import vueI18n from '@windows98/i18n/configs/vue.config'
import Calendar from '../../calendar/src/ui/views/calendar.view.vue'

const app = createApp(Calendar)

app.use(vueI18n)
app.mount('#app')
