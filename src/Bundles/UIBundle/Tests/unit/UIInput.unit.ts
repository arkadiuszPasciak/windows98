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

describe('[UIBundle]<Components>(UIInput)', async () => {
  it('should have classes: main, variant and label position class', () => {
    expect(defaultWrapper.attributes('class')).toBe(
      'UIInput v-primary l-p-left'
    )
  })

  it('should have html structure', () => {
    expect(defaultWrapper.html()).toBe(
      '<div class="UIInput v-primary l-p-left" data-v-3a82de22=""><label class="label" for="main-email" data-v-3a82de22="">Email</label><input id="main-email" class="input" type="email" data-v-3a82de22=""></div>'
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
