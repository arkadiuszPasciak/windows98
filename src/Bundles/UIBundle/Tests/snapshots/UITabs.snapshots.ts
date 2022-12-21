import { shallowMount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UITabs from '@Bundles/UIBundle/Components/UITabs.vue'
import UIText from '@Bundles/UIBundle/Components/UIText.vue'
import { TUITabsProps } from '@Bundles/UIBundle/Supports/UITabs.supports'

const tabs = [
  {
    title: 'General',
    component: UIText,
  },
  {
    title: 'Display',
    component: UIText,
  },
] as TUITabsProps

const defaultWrapper = shallowMount(UITabs, {
  props: {
    tabs: tabs,
  },
})

describe('[UIBundle]<Snapshots>(UITabs)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
