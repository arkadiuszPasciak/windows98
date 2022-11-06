import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Calculator from '@Bundles/CalculatorBundle/Components/Calculator.vue'

const defaultWrapper = mount(Calculator)

describe('[CalculatorBundle]<Snapshots>(Calculator)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
