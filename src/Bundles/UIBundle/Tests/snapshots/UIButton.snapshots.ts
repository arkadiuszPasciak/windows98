import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'

const sizeSmallPrimaryWrapper = mount(UIButton, {
  props: {
    variant: 'primary',
    size: 'small',
  },
  slots: {
    default: 'Click Me!',
  },
})

const sizeMediumPrimaryWrapper = mount(UIButton, {
  props: {
    variant: 'primary',
    size: 'medium',
  },
  slots: {
    default: "Don't Click Me!",
  },
})

describe('[UIBundle]<Snapshots>(UIButton)', async () => {
  it('renders correctly component: size small and variant primary', () => {
    expect(sizeSmallPrimaryWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component: size medium and variant primary', () => {
    expect(sizeMediumPrimaryWrapper.element).toMatchSnapshot()
  })
})
