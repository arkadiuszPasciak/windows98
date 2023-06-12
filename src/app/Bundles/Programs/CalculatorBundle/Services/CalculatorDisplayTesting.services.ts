import { createTestingPinia } from '@pinia/testing'
import CalculatorDisplay from '@APP|Bundles/CalculatorBundle/Components/CalculatorDisplay.vue'
import { ICalculatorDisplayElements } from '@APP|Bundles/CalculatorBundle/Supports/CalculatorDisplay.supports'
import Testing from '@APP|Bundles/TestingBundle/Services/Testing.services'

export default class CalculatorDisplayTesting extends Testing {
  public elements: ICalculatorDisplayElements

  constructor() {
    super({
      mainClassName: 'p.UIText.CalculatorDisplay',
      viewportHeight: 20,
      viewportWidth: 200,
    }),
      (this.elements = {
        calculatorDisplay: '[data-test="calculator-display"]',
      })
  }

  public testComponent(): void {
    this.setViewport()

    this.renderComponent()

    this.checkComponentElements()

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

  public checkValue(value: string): void {
    cy.get(this.elements.calculatorDisplay).should('have.text', value)
  }
}
