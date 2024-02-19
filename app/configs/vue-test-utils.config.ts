import { config } from '@vue/test-utils'
import vueI18n from '@windows98/i18n/configs/vue.config'

const plugins = {
  intlify: vueI18n,
}

// @TODO - add proper typing
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
config.global.plugins = [plugins.intlify]
