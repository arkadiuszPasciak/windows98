import { config } from '@vue/test-utils'
import vueI18n from '@windows98/i18n/configs/vue.config'

const plugins = {
  intlify: vueI18n,
}

config.global.plugins = [plugins.intlify]
