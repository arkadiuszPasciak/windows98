import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'

const defaultWrapper = mount(Pulpit, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('[PulpitBundle]<Components>(Pulpit)', async () => {
  it('should have class', () => {
    expect(defaultWrapper.attributes('class')).toBe('Pulpit')
  })

  it('should be visible', () => {
    expect(defaultWrapper.isVisible()).toBe(true)
  })
})
