import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'

const availableWrapper = mount(UIInput, {
  props: {
    type: 'email',
    id: 'main-email',
    modelValue: 'test@gmail.com',
    labelName: 'Email',
    labelPosition: 'left',
  },
})

const disabledWrapper = mount(UIInput, {
  props: {
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
    type: 'password',
    id: 'main-password',
    modelValue: '12345',
    labelName: 'Password',
    labelPosition: 'top',
    readonly: true,
  },
})

const numberWrapper = mount(UIInput, {
  props: {
    type: 'number',
    id: 'year-switcher',
    modelValue: '2000',
    min: 1950,
    max: 2000,
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

  it('renders correctly component: numberWrapper like as number', () => {
    expect(numberWrapper.element).toMatchSnapshot()
  })
})
