import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UITextarea from '@Bundles/UIBundle/Components/UITextarea.vue'

const defaultWrapper = mount(UITextarea, {
  props: {
    variant: 'primary',
    id: 'comment',
    modelValue: 'test',
    labelName: 'Email',
    labelPosition: 'left',
  },
})

const textarea = defaultWrapper.find('.textarea')
const label = defaultWrapper.find('.label')

describe('[UIBundle]<Components>(UITextarea)', async () => {
  it('should have classes: main, variant and label position class', () => {
    expect(defaultWrapper.attributes('class')).toBe(
      'UITextarea variant-primary label-position-left',
    )
  })

  it('should have attributes: id, for', () => {
    expect(textarea.attributes('id')).toBe('comment')
    expect(label.attributes('for')).toBe('comment')
  })

  it('should be visible: textarea and label', () => {
    expect(textarea.isVisible()).toBe(true)
    expect(label.isVisible()).toBe(true)
  })
})
