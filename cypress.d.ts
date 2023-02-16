import { mount } from 'cypress/vue'
import { MountingOptions } from '@vue/test-utils'
import { Store } from 'pinia'
import { Component } from '@vue/test-utils'

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
        options?: MountingOptions & { store?: Store },
      ): Chainable<any>
    }
  }
}
