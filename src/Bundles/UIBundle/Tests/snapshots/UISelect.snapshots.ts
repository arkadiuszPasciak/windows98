import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
import { languagesOptions } from '@Bundles/LanguageBundle/Mocks/Language.mocks'

const defaultWrapper = mount(UISelect, {
  props: {
    id: 'ui-select-test',
    options: languagesOptions,
    modelValue: languagesOptions[0].value,
  },
})

describe('[UIBundle]<Snapshots>(UISelect)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
