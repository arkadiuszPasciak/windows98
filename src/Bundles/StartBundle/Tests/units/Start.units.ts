import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Start from '@Bundles/StartBundle/Components/Start.vue'

const defaultWrapper = mount(Start)
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
