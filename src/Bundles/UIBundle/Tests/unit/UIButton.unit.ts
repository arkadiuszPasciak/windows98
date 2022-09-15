import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'

const defaultWrapper = mount(UIButton, {
  props: {
    variant: 'primary',
    size: 'medium',
  },
  slots: {
    default: 'Click Me!',
  },
})

describe('[UIBundle]<Components>(UIButton)', async () => {
  it('should have classes: main, variant and size', () => {
    expect(defaultWrapper.attributes('class')).toBe(
      'UIButton v-primary s-medium',
    )
  })

  it('should have slot: text', () => {
    expect(defaultWrapper.text()).toBe('Click Me!')
  })

  it('should have html structure', () => {
    expect(defaultWrapper.html()).toBe(
      '<button class="UIButton v-primary s-medium" type="button" data-v-3a6be6dd="">Click Me!</button>',
    )
  })

  it('should have attribute type', () => {
    expect(defaultWrapper.attributes('type')).toBe('button')
  })

  it('should be visible', () => {
    expect(defaultWrapper.find('button').isVisible()).toBe(true)
  })
})
