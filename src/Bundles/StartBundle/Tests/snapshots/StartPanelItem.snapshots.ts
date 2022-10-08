import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import StartPanelItem from '@Bundles/StartBundle/Components/StartPanelItem.vue'

const sizeSmallWrapper = mount(StartPanelItem, {
  props: {
    name: 'StartBundle.shut-down',
    iconName: 'shut-down',
    size: 'small',
  },
})

const sizeMediumWrapper = mount(StartPanelItem, {
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
