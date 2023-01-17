import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import CalendarYearSwitcher from '@Bundles/CalendarBundle/Components/CalendarYearSwitcher.vue'

const defaultWrapper = mount(CalendarYearSwitcher, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('[CalendarBundle]<Snapshots>(CalendarYearSwitcher)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
