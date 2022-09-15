import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import PulpitItem from '@Bundles/PulpitBundle/Components/PulpitItem.vue'

const defaultWrapper = mount(PulpitItem, {
  props: {
    name: 'My Computer',
    iconName: 'mycomputer',
  },
})

const name = defaultWrapper.find('.name')
const icon = defaultWrapper.find('.icon')

describe('[PulpitBundle]<Components>(PulpitItem)', async () => {
  it('should have classes', () => {
    expect(defaultWrapper.attributes('class')).toBe('PulpitItem')
    expect(icon.attributes('class')).toBe('icon')
    expect(name.attributes('class')).toBe('name')
  })

  it('should be visible', () => {
    expect(defaultWrapper.isVisible()).toBe(true)
    expect(name.isVisible()).toBe(true)
    expect(icon.isVisible()).toBe(true)
  })

  it('should have text', () => {
    expect(name.text()).toBe('My Computer')
  })

  it('should have attributes: id, for and src', () => {
    expect(icon.attributes('width')).toBe('32')
    expect(icon.attributes('height')).toBe('32')
    expect(icon.attributes('src')).toBe(
      'src/Assets/Icons/Applications/mycomputer.png',
    )
  })
})
