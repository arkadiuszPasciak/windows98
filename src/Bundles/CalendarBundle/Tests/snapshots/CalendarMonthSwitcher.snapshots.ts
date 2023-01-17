import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import CalendarMonthSwitcher from '@Bundles/CalendarBundle/Components/CalendarMonthSwitcher.vue'

const defaultWrapper = mount(CalendarMonthSwitcher, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('[CalendarBundle]<Snapshots>(CalendarMonthSwitcher)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
