import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Clock from '@Bundles/ClockBundle/Components/Clock.vue'

const defaultWrapper = mount(Clock)

describe('[ClockBundle]<Snapshots>(Clock)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
