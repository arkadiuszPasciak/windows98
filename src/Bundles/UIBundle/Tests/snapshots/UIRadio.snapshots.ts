import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIRadio from '@Bundles/UIBundle/Components/UIRadio.vue'

const availableWrapper = mount(UIRadio, {
  props: {
    variant: 'primary',
    disabled: false,
    checked: false,
    name: 'available-radio',
    modelValue: 'restart',
  },
  slots: {
    default: 'Check Me!',
  },
})

const unAvailableWrapper = mount(UIRadio, {
  props: {
    variant: 'primary',
    disabled: true,
    checked: true,
    name: 'unavailable-radio',
    modelValue: 'shut-down',
  },
})

describe('[UIBundle]<Snapshots>(UIRadio)', async () => {
  it('renders correctly component: variant primary, disabled false and checked false', () => {
    expect(availableWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component: variant primary, disabled true and checked true', () => {
    expect(unAvailableWrapper.element).toMatchSnapshot()
  })
})
