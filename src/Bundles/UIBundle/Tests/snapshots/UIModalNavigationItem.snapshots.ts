import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIModalNavigationItem from '@Bundles/UIBundle/Components/UIModalNavigation.vue'

const defaultWrapper = mount(UIModalNavigationItem, {
  slots: {
    default: '<p>This is a default slot!</p>',
  },
})

describe('[UIBundle]<Snapshots>(UIModalNavigationItem)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
