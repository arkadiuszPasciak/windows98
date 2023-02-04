import { mount } from 'cypress/vue'
import { createPinia } from 'pinia'
import { i18n } from '@/Configs/I18n.config'
import '@Assets/Styles/General/Base.styles.scss'

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || []
  options.global.plugins.push(createPinia())
  options.global.plugins.push(i18n)

  const { ...mountOptions } = options

  // Render component
  return mount(component, mountOptions)
})
