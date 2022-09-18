import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { i18n } from '@Configs/I18n/I18n.config'
import StartPanelItem from '@Bundles/StartBundle/Components/StartPanelItem.vue'
import { createTestingPinia } from '@pinia/testing'

const sizeSmallWrapper = mount(StartPanelItem, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
  props: {
    name: 'StartBundle.shut-down',
    iconName: 'shut-down',
    size: 'small',
  },
})

const sizeMediumWrapper = mount(StartPanelItem, {
  global: {
    plugins: [createTestingPinia(), i18n],
  },
  props: {
    name: 'StartBundle.documents',
    iconName: 'documents',
    size: 'medium',
  },
})

describe('[StartBundle]<Snapshots>(StartPanelItem)', async () => {
  it('renders correctly size small component', () => {
    expect(sizeSmallWrapper.element).toMatchSnapshot()
  })

  it('renders correctly size medium component', () => {
    expect(sizeMediumWrapper.element).toMatchSnapshot()
  })
})
