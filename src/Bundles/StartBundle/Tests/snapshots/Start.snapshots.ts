import { mount, flushPromises } from '@vue/test-utils'
import { expect, it, describe, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Start from '@Bundles/StartBundle/Components/Start.vue'

describe('[StartBundle]<Snapshots>(Start)', () => {
  it('renders correctly component before click button', async () => {
    const wrapper = mount(Start, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders correctly component after click button', async () => {
    const wrapper = mount(Start, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const buttonToOpenPanel = wrapper.find('.button-start')

    await Promise.all([
      import('@Bundles/StartBundle/Components/StartPanelItem.vue'),
      import('@Bundles/StartBundle/Components/StartPanel.vue'),
    ])

    await buttonToOpenPanel.trigger('click')

    await flushPromises()
    await vi.dynamicImportSettled()

    expect(wrapper.element).toMatchSnapshot()
  })
})
