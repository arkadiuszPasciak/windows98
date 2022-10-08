import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UICheckbox from '@Bundles/UIBundle/Components/UICheckbox.vue'

const availableWrapper = mount(UICheckbox, {
  props: {
    variant: 'primary',
    disabled: false,
    checked: false,
  },
  slots: {
    default: 'Check Me!',
  },
})

const unAvailableWrapper = mount(UICheckbox, {
  props: {
    variant: 'primary',
    disabled: true,
    checked: true,
  },
})

describe('[UIBundle]<Snapshots>(UICheckbox)', async () => {
  it('renders correctly component: variant primary, disabled false and checked false', () => {
    expect(availableWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component: variant primary, disabled true and checked true', () => {
    expect(unAvailableWrapper.element).toMatchSnapshot()
  })
})
