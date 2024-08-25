import type { MountingOptions } from "@vue/test-utils"
import type { Component } from "@vue/test-utils"
import { mount } from "cypress/vue"
import type { Store } from "pinia"

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
				// biome-ignore lint/suspicious/noExplicitAny: I move to playwright slowly and no need to refactor this
			): Chainable<any>
		}
	}
}
