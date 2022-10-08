import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'

const defaultWrapper = mount(Pulpit)

describe('[PulpitBundle]<Snapshots>(Pulpit)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
