import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import SettingsGeneral from '@Bundles/SettingsBundle/Components/SettingsGeneral.vue'

const defaultWrapper = mount(SettingsGeneral)

describe('[SettingsBundle]<Snapshots>(SettingsGeneral)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
