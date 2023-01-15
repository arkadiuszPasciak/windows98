import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIFrame from '@Bundles/UIBundle/Components/UIFrame.vue'

const defaultWrapper = mount(UIFrame, {
  props: {
    title: 'Date & Time',
  },
  slots: {
    default: '<p>here can be content :)</p>',
  },
})

describe('[UIBundle]<Snapshots>(UIFrame)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
