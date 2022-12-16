import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Settings from '@Bundles/SettingsBundle/Components/Settings.vue'

const defaultWrapper = mount(Settings, {
  global: {
    plugins: [
      createTestingPinia({
        initialState: {
          program: { modalSettings: true },
        },
      }),
    ],
  },
})

describe('[SettingsBundle]<Snapshots>(Settings)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
