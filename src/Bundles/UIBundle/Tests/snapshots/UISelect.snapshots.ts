import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
import { MLanguageOptions } from '@Bundles/LanguageBundle/Mocks/Language.mocks'

const firstWrapper = mount(UISelect, {
  props: {
    id: 'ui-select-test',
    options: MLanguageOptions,
    modelValue: MLanguageOptions[0].value,
    labelName: 'Themes',
    labelPosition: 'top',
  },
})

const secondWrapper = mount(UISelect, {
  props: {
    id: 'ui-select-test',
    options: MLanguageOptions,
    modelValue: MLanguageOptions[0].value,
    labelName: 'Languages',
    labelPosition: 'left',
  },
})

describe('[UIBundle]<Snapshots>(UISelect)', async () => {
  it('renders correctly component with label position top', () => {
    expect(firstWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component with label position left', () => {
    expect(secondWrapper.element).toMatchSnapshot()
  })
})
