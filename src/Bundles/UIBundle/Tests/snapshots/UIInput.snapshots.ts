import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'

const availableWrapper = mount(UIInput, {
  props: {
    variant: 'primary',
    type: 'email',
    id: 'main-email',
    modelValue: 'test@gmail.com',
    labelName: 'Email',
    labelPosition: 'left',
  },
})

const disabledWrapper = mount(UIInput, {
  props: {
    variant: 'primary',
    type: 'text',
    id: 'main-first-name',
    modelValue: 'John',
    labelName: 'First name',
    labelPosition: 'top',
    disabled: true,
  },
})

const readonlyWrapper = mount(UIInput, {
  props: {
    variant: 'primary',
    type: 'password',
    id: 'main-password',
    modelValue: '12345',
    labelName: 'Password',
    labelPosition: 'top',
    readonly: true,
  },
})

describe('[UIBundle]<Snapshots>(UIInput)', async () => {
  it('renders correctly component: availableWrapper like as email', () => {
    expect(availableWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component: disabledWrapper like as text', () => {
    expect(disabledWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component: readonlyWrapper like as password', () => {
    expect(readonlyWrapper.element).toMatchSnapshot()
  })
})
