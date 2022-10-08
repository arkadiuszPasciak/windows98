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

describe('[PulpitBundle]<Snapshots>(Pulpit)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
