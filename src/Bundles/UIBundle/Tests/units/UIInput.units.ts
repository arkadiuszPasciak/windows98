import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'

const defaultWrapper = mount(UIInput, {
  props: {
    variant: 'primary',
    type: 'email',
    id: 'main-email',
    modelValue: 'test',
    labelName: 'Email',
    labelPosition: 'left',
  },
})

const input = defaultWrapper.find('.input')
const label = defaultWrapper.find('.label')

// TODO Trigger text on input[disabled] and check value of input

describe('[UIBundle]<Components>(UIInput)', async () => {
  it('should have classes: main, variant and label position class', () => {
    expect(defaultWrapper.attributes('class')).toBe(
      'UIInput variant-primary label-position-left',
    )
  })

  it('should have attributes: type, id, for', () => {
    expect(input.attributes('type')).toBe('email')
    expect(input.attributes('id')).toBe('main-email')
    expect(label.attributes('for')).toBe('main-email')
  })

  it('should be visible: input and label', () => {
    expect(input.isVisible()).toBe(true)
    expect(label.isVisible()).toBe(true)
  })
})
