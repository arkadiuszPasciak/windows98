import { mount } from 'cypress/vue'
import vueI18n from '@windows98/i18n/configs/vue.config'
// @TODO - replace with import "@windows98/design-system" in the next commit
import '../../../../design-system/configs/base.config.scss'
import '../styles/cypress.style.scss'

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || []
  options.global.plugins.push(vueI18n)

  const { ...mountOptions } = options

  // Render component
  return mount(component, mountOptions)
})
