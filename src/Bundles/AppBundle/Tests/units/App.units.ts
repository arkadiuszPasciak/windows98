import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import App from '@Bundles/AppBundle/Components/App.vue'

const defaultWrapper = mount(App)

describe('[AppBundle]<Components>(App)', () => {
  it('mounted App', () => {
    expect(defaultWrapper.exists()).toBe(true)
  })
})
