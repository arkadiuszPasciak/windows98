import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UICheckbox from '@Bundles/UIBundle/Components/UICheckbox.vue'

const defaultWrapper = mount(UICheckbox, {
  props: {
    variant: 'primary',
  },
  slots: {
    default: 'I am not checked',
  },
})

describe('[UIBundle]<Components>(UICheckbox)', async () => {
  it('should have classes: main and variant', () => {
    expect(defaultWrapper.attributes('class')).toBe('UICheckbox v-primary')
  })

  it('should have attribute type checkbox in input', () => {
    expect(defaultWrapper.find('.input').attributes('type')).toBe('checkbox')
  })
})
