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

const input = defaultWrapper.find('.range')
const labelStart = defaultWrapper.find('.is-start')
const labelEnd = defaultWrapper.find('.is-end')

describe('[UIBundle]<Components>(UIRange)', async () => {
  it('should have classes: main, variant and position class', () => {
    expect(defaultWrapper.attributes('class')).toBe(
      'UIRange v-primary p-horizontal'
    )
  })

  it('should have html structure', () => {
    expect(defaultWrapper.html()).toBe(
      `<div class="UIRange v-primary p-horizontal" data-v-503380e2=""><label class="label is-start" for="person-age" data-v-503380e2="">Low</label>
  <!--v-if--><input id="person-age" class="range" type="range" min="1" max="12" step="3" data-v-503380e2=""><label class="label is-end" for="person-age" data-v-503380e2="">High</label>
</div>`
    )
  })

  it('should have attributes: type, id, min, max, step for', () => {
    expect(input.attributes('type')).toBe('range')
    expect(input.attributes('id')).toBe('person-age')
    expect(input.attributes('min')).toBe('1')
    expect(input.attributes('max')).toBe('12')
    expect(input.attributes('step')).toBe('3')
    expect(labelStart.attributes('for')).toBe('person-age')
    expect(labelEnd.attributes('for')).toBe('person-age')
  })

  it('should be visible: input and label', () => {
    expect(input.isVisible()).toBe(true)
    expect(labelStart.isVisible()).toBe(true)
    expect(labelEnd.isVisible()).toBe(true)
  })

  it('should have text for labels', () => {
    expect(labelStart.text()).toBe('Low')
    expect(labelEnd.text()).toBe('High')
  })
})
