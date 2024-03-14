import { mount } from 'cypress/vue'
// import vueI18n from '@windows98/i18n/configs/vue.config'
import '@windows98/design-system/base.config.css'
import '../styles/cypress.style.scss'
import { Store } from 'pinia'
import { Component } from 'vue'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Helper mount function for Vue Components
       * @param component Vue Component or JSX Element to mount
       * @param options Options passed to Vue Test Utils
       */
      mount(
        component: Component,
        options?: any & { store?: Store },
      ): Chainable<any>
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || []
  // options.global.plugins.push(vueI18n)

  const { ...mountOptions } = options

  // Render component
  return mount(component as any, mountOptions)
})
