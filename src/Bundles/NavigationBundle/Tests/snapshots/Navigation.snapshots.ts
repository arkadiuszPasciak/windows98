import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'

const defaultWrapper = mount(Navigation)

describe('[NavigationBundle]<Snapshots>(Navigation)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
