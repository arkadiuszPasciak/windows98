import { createTestingPinia } from '@pinia/testing'
import Calculator from '@Bundles/CalculatorBundle/Components/Calculator.vue'

describe('[CalculatorBundle]<Components>(Calculator)', () => {
  before(() => {
    cy.viewport(190, 220)

    cy.mount(Calculator, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              program: { modalCalculator: true },
            },
            createSpy: cy.spy,
          }),
        ],
      },
    })
  })

  it('should have element and class', () => {
    cy.get('div.Calculator')
  })
})
