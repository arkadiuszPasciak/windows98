import { config } from '@vue/test-utils'
import { i18n } from '../../src/configs/i18n.config'

const plugins = {
  intlify: i18n,
}

config.global.plugins = [plugins.intlify]
