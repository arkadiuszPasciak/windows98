import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIModalNavigation from '@Bundles/UIBundle/Components/UIModalNavigation.vue'

const defaultWrapper = mount(UIModalNavigation, {
  slots: {
    default: '<p>This is a default slot!</p>',
  },
})

describe('[UIBundle]<Snapshots>(UIModalNavigation)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
