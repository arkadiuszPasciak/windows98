import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { i18n } from '@Configs/I18n/I18n.config'
import Start from '@Bundles/StartBundle/Components/Start.vue'

const defaultWrapper = mount(Start, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
})
const buttonToOpenPanel = defaultWrapper.find('.button-start')

describe('[StartBundle]<Snapshots>(Start)', () => {
  it('renders correctly component before click button', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component after click button', async () => {
    await buttonToOpenPanel.trigger('click')
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
