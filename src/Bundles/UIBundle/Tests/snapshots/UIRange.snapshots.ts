import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIRange from '@Bundles/UIBundle/Components/UIRange.vue'

const horizontalPrimaryWrapper = mount(UIRange, {
  props: {
    variant: 'primary',
    id: 'person-age',
    modelValue: 1,
    position: 'horizontal',
    labelNameStart: 'Low',
    labelNameEnd: 'High',
    minValue: 1,
    maxValue: 12,
    stepValue: 3,
  },
})

const verticalPrimaryWrapper = mount(UIRange, {
  props: {
    variant: 'primary',
    id: 'something-number',
    modelValue: 5,
    position: 'vertical',
    labelNameStart: 'Start',
    labelNameEnd: 'End',
    minValue: 5,
    maxValue: 20,
    stepValue: 1,
  },
})

describe('[UIBundle]<Snapshots>(UIRange)', async () => {
  it('renders correctly component: horizontal with primary', () => {
    expect(horizontalPrimaryWrapper.element).toMatchSnapshot()
  })

  it('renders correctly component: vertical with primary', () => {
    expect(verticalPrimaryWrapper.element).toMatchSnapshot()
  })
})
