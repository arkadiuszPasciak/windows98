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

describe('[UIBundle]<Components>(UIInput)', () => {
  it('should be possible to write text in input', async () => {
    await defaultWrapper.find('input').setValue('Can I write here?')
    expect(defaultWrapper.find('input').element.value).toBe('Can I write here?')
  })
})
