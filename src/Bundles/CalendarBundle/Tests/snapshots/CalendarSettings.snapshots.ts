import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import CalendarSettings from '@Bundles/CalendarBundle/Components/CalendarSettings.vue'

const defaultWrapper = mount(CalendarSettings, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('[CalendarBundle]<Snapshots>(CalendarSettings)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
