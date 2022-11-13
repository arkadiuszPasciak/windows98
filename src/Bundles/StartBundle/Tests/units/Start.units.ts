import { flushPromises, mount } from '@vue/test-utils'
import { expect, it, describe, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Start from '@Bundles/StartBundle/Components/Start.vue'

describe('[StartBundle]<Components>(Start)', () => {
  it('should open or close panel on click', async () => {
    const defaultWrapper = mount(Start, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    const buttonToOpenPanel = defaultWrapper.find('.button-start')

    await Promise.all([
      import('@Bundles/StartBundle/Components/StartPanelItem.vue'),
      import('@Bundles/StartBundle/Components/StartPanel.vue'),
    ])
    expect(defaultWrapper.find('.StartPanel').exists()).not.toBeTruthy()

    await buttonToOpenPanel.trigger('click')

    await flushPromises()
    await vi.dynamicImportSettled()

    expect(defaultWrapper.find('.StartPanel').exists()).toBeTruthy()
    await buttonToOpenPanel.trigger('click')
    expect(defaultWrapper.find('.StartPanel').exists()).not.toBeTruthy()
  })
})
