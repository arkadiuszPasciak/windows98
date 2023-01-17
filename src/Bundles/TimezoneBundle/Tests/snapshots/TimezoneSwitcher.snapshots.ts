import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Timezone from '@Bundles/TimezoneBundle/Components/TimezoneSwitcher.vue'

const defaultWrapper = mount(Timezone)

describe('[TimezoneBundle]<Snapshots>(TimezoneSwitcher)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
