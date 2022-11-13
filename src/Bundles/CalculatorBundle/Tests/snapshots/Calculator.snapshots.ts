import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Calculator from '@Bundles/CalculatorBundle/Components/Calculator.vue'

const defaultWrapper = mount(Calculator, {
  global: {
    plugins: [
      createTestingPinia({
        initialState: {
          program: { modalCalculator: true },
        },
      }),
    ],
  },
})

describe('[CalculatorBundle]<Snapshots>(Calculator)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
