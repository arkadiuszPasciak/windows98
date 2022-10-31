import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIText from '@Bundles/UIBundle/Components/UIText.vue'

const defaultWrapper = mount(UIText, {
  slots: {
    default: 'What do you want the computer to do?',
  },
})

describe('[UIBundle]<Snapshots>(UIText)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
