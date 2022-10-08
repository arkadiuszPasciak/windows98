import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Start from '@Bundles/StartBundle/Components/Start.vue'

const defaultWrapper = mount(Start)
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
