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

describe('[UIBundle]<Components>(UICheckbox)', () => {
  it('should be possible to set checked in input', async () => {
    await defaultWrapper.find('input').setValue(true)
    expect(defaultWrapper.find('input').element.checked).toBe(true)

    await defaultWrapper.find('input').setValue(false)
    expect(defaultWrapper.find('input').element.checked).toBe(false)
  })
})
