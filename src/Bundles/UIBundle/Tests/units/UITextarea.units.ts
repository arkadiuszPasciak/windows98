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

describe('[UIBundle]<Components>(UITextarea)', () => {
  it('should be possible to write text in textarea', async () => {
    await defaultWrapper.find('textarea').setValue('Can I write here?')
    expect(defaultWrapper.find('textarea').element.value).toBe(
      'Can I write here?',
    )
  })
})
