import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import StartPanel from '@Bundles/StartBundle/Components/StartPanel.vue'

const variantPrimaryWrapper = mount(StartPanel, {
  props: {
    variant: 'primary',
  },
})

const variantSecondaryWrapper = mount(StartPanel, {
  props: {
    variant: 'secondary',
  },
})

describe('[StartBundle]<Snapshots>(StartPanel)', async () => {
  it('renders correctly variant primary component', () => {
    expect(variantPrimaryWrapper.element).toMatchSnapshot()
  })

  it('renders correctly variant secondary component', () => {
    expect(variantSecondaryWrapper.element).toMatchSnapshot()
  })
})
