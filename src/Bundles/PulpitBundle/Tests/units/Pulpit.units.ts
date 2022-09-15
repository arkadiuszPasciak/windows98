import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { i18n } from '@Configs/I18n/I18n.config'
import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'

const defaultWrapper = mount(Pulpit, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
})

describe('[PulpitBundle]<Components>(Pulpit)', async () => {
  it('should have class', () => {
    expect(defaultWrapper.attributes('class')).toBe('Pulpit')
  })

  it('should be visible', () => {
    expect(defaultWrapper.isVisible()).toBe(true)
  })
})
