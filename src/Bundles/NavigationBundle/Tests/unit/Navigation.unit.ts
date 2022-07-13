import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'

const defaultWrapper = mount(Navigation)

describe('[NavigationBundle]<Components>(Navigation)', async () => {
  it('should have class', () => {
    expect(defaultWrapper.attributes('class')).toBe('Navigation')
  })

  it('should be visible', () => {
    expect(defaultWrapper.isVisible()).toBe(true)
  })
})
