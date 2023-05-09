import { mount } from 'cypress/vue'
import { i18n } from '@CONFIGS/i18n.config'
import '@APP|Assets/Styles/General/Base.styles.scss'
import '@APP|Assets/Styles/Config/Cypress.styles.scss'

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || []
  options.global.plugins.push(i18n)

  const { ...mountOptions } = options

  // Render component
  return mount(component, mountOptions)
})
