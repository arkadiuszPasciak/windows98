import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIRange from '@Bundles/UIBundle/Components/UIRange.vue'

const defaultWrapper = mount(UIRange, {
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

describe('[UIBundle]<Components>(UIRange)', () => {
  it('should be possible to set value in range', async () => {
    await defaultWrapper.find('input').setValue('5')
    expect(defaultWrapper.find('input').element.value).toBe('5')

    await defaultWrapper.find('input').setValue('15')
    expect(defaultWrapper.find('input').element.value).toBe('12')

    await defaultWrapper.find('input').setValue('-5')
    expect(defaultWrapper.find('input').element.value).toBe('1')
  })
})
