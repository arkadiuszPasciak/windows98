import { createTestingPinia } from '@pinia/testing'
import CalculatorDisplay from '@APP|Bundles/CalculatorBundle/Components/CalculatorDisplay.vue'
import { ICalculatorDisplayElements } from '@APP|Bundles/CalculatorBundle/Supports/CalculatorDisplay.supports'

export default class CalculatorDisplayTesting {
  public elements: ICalculatorDisplayElements

  constructor() {
    this.elements = {
      calculatorDisplay: '[data-test="calculator-display"]',
    }
  }

  public testComponent(): void {
    this.setViewport()

    this.renderComponent()

    this.checkValue('0')
  }

  public renderComponent(): void {
    cy.mount(CalculatorDisplay, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            stubActions: false,
          }),
        ],
      },
    })
  }

  public setViewport(): void {
    cy.viewport(200, 20)
  }

  public checkValue(value: string): void {
    cy.get(this.elements.calculatorDisplay).should('have.text', value)
  }
}
