import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import App from '@APP|Bundles/AppBundle/Components/App.vue'

const defaultWrapper = mount(App, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('[AppBundle]<Components>(App)', () => {
  it('mounted App', () => {
    expect(defaultWrapper.exists()).toBe(true)
  })
})
