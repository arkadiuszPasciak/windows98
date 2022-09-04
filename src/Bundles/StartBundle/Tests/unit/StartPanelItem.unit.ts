import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import StartPanelItem from '@Bundles/StartBundle/Components/StartPanelItem.vue'

const defaultWrapper = mount(StartPanelItem, {
  props: {
    name: 'Shut Down...',
    iconName: 'shut-down',
    size: 'small',
  },
})

const name = defaultWrapper.find('.name')
const icon = defaultWrapper.find('.icon')

describe('[StartBundle]<Components>(StartPanelItem)', async () => {
  it('should have classes', () => {
    expect(defaultWrapper.attributes('class')).toBe('StartPanelItem s-small')
    expect(icon.attributes('class')).toBe('icon')
    expect(name.attributes('class')).toBe('name')
  })

  it('should be visible', () => {
    expect(defaultWrapper.isVisible()).toBe(true)
    expect(name.isVisible()).toBe(true)
    expect(icon.isVisible()).toBe(true)
  })

  it('should have text', () => {
    expect(name.text()).toBe('Shut Down...')
  })

  it('should have attributes: id, for and src', () => {
    expect(icon.attributes('width')).toBe('18')
    expect(icon.attributes('height')).toBe('18')
    expect(icon.attributes('src')).toBe(
      'src/Assets/Icons/Applications/shut-down.png'
    )
  })
})
