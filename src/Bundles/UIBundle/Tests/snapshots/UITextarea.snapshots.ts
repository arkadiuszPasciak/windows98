import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UITextarea from '@Bundles/UIBundle/Components/UITextarea.vue'

const leftPrimaryWrapper = mount(UITextarea, {
  props: {
    variant: 'primary',
    id: 'email',
    modelValue: 'your email...',
    labelName: 'Email',
    labelPosition: 'left',
  },
})

const topPrimaryWrapper = mount(UITextarea, {
  props: {
    variant: 'primary',
    id: 'address',
    modelValue: 'your address..',
    labelName: 'Address',
    labelPosition: 'top',
  },
})

describe('[UIBundle]<Snapshots>(UITextarea)', async () => {
  it('renders correctly component: leftPrimaryWrapper like as email', () => {
    expect(leftPrimaryWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component: topPrimaryWrapper like as address', () => {
    expect(topPrimaryWrapper.element).toMatchSnapshot()
  })
})
