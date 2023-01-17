import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import CalendarView from '@Bundles/CalendarBundle/Components/CalendarView.vue'

const defaultWrapper = mount(CalendarView, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('[CalendarBundle]<Snapshots>(CalendarView)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
