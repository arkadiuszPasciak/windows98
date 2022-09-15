import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import StartPanel from '@Bundles/StartBundle/Components/StartPanel.vue'

const defaultWrapper = mount(StartPanel, {
  props: {
    variant: 'primary',
  },
})

describe('[StartBundle]<Components>(StartPanel)', async () => {
  it('should have classes', () => {
    expect(defaultWrapper.attributes('class')).toBe('StartPanel v-primary')
  })

  it('should be visible', () => {
    expect(defaultWrapper.isVisible()).toBe(true)
  })
})
