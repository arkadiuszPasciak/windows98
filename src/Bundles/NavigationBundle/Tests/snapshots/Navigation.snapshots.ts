import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { i18n } from '@Configs/I18n/I18n.config'
import Navigation from '@Bundles/NavigationBundle/Components/Navigation.vue'

const defaultWrapper = mount(Navigation, {
  global: {
    plugins: [i18n, createTestingPinia()],
  },
})

describe('[NavigationBundle]<Snapshots>(Navigation)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
