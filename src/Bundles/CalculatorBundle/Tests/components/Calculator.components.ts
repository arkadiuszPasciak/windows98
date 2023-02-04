import { createTestingPinia } from '@pinia/testing'
import Calculator from '@Bundles/CalculatorBundle/Components/Calculator.vue'

describe('[CalculatorBundle]<Components>(Calculator)', () => {
  before(() => {
    cy.viewport(190, 220)

    cy.mount(Calculator, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalCalculator: true },
            },
            stubActions: false,
          }),
        ],
      },
    })
  })

  it('should have element and class', () => {
    cy.get('div.Calculator')

    cy.get('[data-test="calculator-button-7"]').click()
  })
})
