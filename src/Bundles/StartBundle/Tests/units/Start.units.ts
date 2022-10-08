import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { i18n } from '@Configs/I18n/I18n.config'
import { createTestingPinia } from '@pinia/testing'
import Start from '@Bundles/StartBundle/Components/Start.vue'

const defaultWrapper = mount(Start, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
})
const buttonToOpenPanel = defaultWrapper.find('.button-start')

describe('[StartBundle]<Components>(Start)', () => {
  it('should open or close panel on click', async () => {
    expect(defaultWrapper.find('.StartPanel').exists()).not.toBeTruthy()
    await buttonToOpenPanel.trigger('click')
    expect(defaultWrapper.find('.StartPanel').exists()).toBeTruthy()
    await buttonToOpenPanel.trigger('click')
    expect(defaultWrapper.find('.StartPanel').exists()).not.toBeTruthy()
  })
})
