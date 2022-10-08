import { config } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { i18n } from '@Configs/I18n.config'

const plugins = {
  pinia: createTestingPinia(),
  intlify: i18n,
}

config.global.plugins = [plugins.pinia, plugins.intlify]
