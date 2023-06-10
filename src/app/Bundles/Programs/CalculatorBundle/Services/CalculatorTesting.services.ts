import { createTestingPinia } from '@pinia/testing'
import Calculator from '@APP|Bundles/CalculatorBundle/Components/Calculator.vue'
import CalculatorKeyboardTesting from '@APP|Bundles/CalculatorBundle/Services/CalculatorKeyboardTesting.services'
import CalculatorDisplayTesting from '@APP|Bundles/CalculatorBundle/Services/CalculatorDisplayTesting.services'

const CalculatorDisplayTestingService = new CalculatorDisplayTesting()
const CalculatorKeyboardTestingService = new CalculatorKeyboardTesting()

export default class CalculatorTesting {
  public elements: any

  constructor() {
    this.elements = {
      mainClass: 'div.Calculator',
      modalTitle: '[data-test="modal-header-title"]',
    }
  }

  public calculateMathematicalOperation(): void {
    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.five,
      '5',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.eight,
      '58',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.minus,
      '58-',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.two,
      '58-2',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.four,
      '58-24',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.dot,
      '58-24.',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.seven,
      '58-24.7',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.add,
      '58-24.7+',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.nine,
      '58-24.7+9',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.zero,
      '58-24.7+90',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.eight,
      '58-24.7+908',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.divide,
      '58-24.7+908/',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.three,
      '58-24.7+908/3',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.multiply,
      '58-24.7+908/3*',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.one,
      '58-24.7+908/3*1',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.six,
      '58-24.7+908/3*16',
    )

    this.clickButtonAndCheckValue(
      CalculatorKeyboardTestingService.elements.button.result,
      '4875.966666666667',
    )
  }

  public testComponent(): void {
    this.setViewport()

    this.renderComponent()

    this.checkMainElement()

    this.checkModalTitle()
  }

  private checkMainElement(): void {
    cy.get(this.elements.mainClass).should('exist')
  }

  private checkModalTitle(): void {
    cy.get(this.elements.modalTitle).should('have.text', 'Calculator')
  }

  private clickButtonAndCheckValue(button: string, value: string): void {
    CalculatorKeyboardTestingService.clickButton(button)
    CalculatorDisplayTestingService.checkValue(value)
  }

  private renderComponent(): void {
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
  }

  private setViewport(): void {
    cy.viewport(190, 220)
  }
}
