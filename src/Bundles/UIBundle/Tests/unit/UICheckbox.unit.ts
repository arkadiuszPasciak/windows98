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

  it('should have html structure', () => {
    expect(defaultWrapper.html()).toBe(
      `<label class="UICheckbox v-primary" data-v-1a3e1ba4=""><input class="input" type="checkbox" data-v-1a3e1ba4=""><span class="checkmark" data-v-1a3e1ba4=""><i class="icon" data-v-1a3e1ba4=""></i></span>
  <p class="text" data-v-1a3e1ba4="">I am not checked</p>
</label>`
    )
  })

  it('should have attribute type checkbox in input', () => {
    expect(defaultWrapper.find('.input').attributes('type')).toBe('checkbox')
  })
})
