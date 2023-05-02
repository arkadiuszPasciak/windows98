import { config } from '@vue/test-utils'
import { i18n } from '@CONFIGS/i18n.config'

const plugins = {
  intlify: i18n,
}

config.global.plugins = [plugins.intlify]
