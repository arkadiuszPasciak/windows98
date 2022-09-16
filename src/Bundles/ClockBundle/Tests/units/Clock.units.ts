import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Clock from '@Bundles/ClockBundle/Components/Clock.vue'

const defaultWrapper = mount(Clock, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('[ClockBundle]<Components>(Clock)', () => {
  it('should have class', () => {
    expect(defaultWrapper.attributes('class')).toBe('Clock')
  })

  it('should be visible', () => {
    expect(defaultWrapper.isVisible()).toBe(true)
  })
})
