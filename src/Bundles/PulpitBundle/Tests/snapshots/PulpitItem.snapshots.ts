import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import PulpitItem from '@Bundles/PulpitBundle/Components/PulpitItem.vue'

const defaultWrapper = mount(PulpitItem, {
  props: {
    name: 'My Computer',
    iconName: 'mycomputer',
  },
})

describe('[PulpitBundle]<Snapshots>(PulpitItem)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
