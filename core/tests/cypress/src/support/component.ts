import { mount } from 'cypress/vue'
import { i18n } from '../../../../../src/configs/i18n.config'
// @TODO - replace with import "@windows98/design-system" in the next commit
import '../../../../design-system/configs/base.config.scss'
import '../styles/cypress.style.scss'

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
