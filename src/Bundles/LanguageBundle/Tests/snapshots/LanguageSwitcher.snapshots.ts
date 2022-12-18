import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import LanguageSwitcher from '@Bundles/LanguageBundle/Components/LanguageSwitcher.vue'

const defaultWrapper = mount(LanguageSwitcher)

describe('[LanguageBundle]<Snapshots>(LanguageSwitcher)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
