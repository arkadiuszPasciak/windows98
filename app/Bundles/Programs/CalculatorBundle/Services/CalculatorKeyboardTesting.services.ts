import { createTestingPinia } from '@pinia/testing'
import CalculatorKeyboard from '@APP|Bundles/CalculatorBundle/Components/CalculatorKeyboard.vue'
import { ICalculatorKeyboardElements } from '@APP|Bundles/CalculatorBundle/Supports/CalculatorKeyboard.supports'
import {
  ECalculatorNumber,
  ECalculatorSign,
  TCalculatorNumber,
  TCalculatorSign,
} from '@APP|Bundles/CalculatorBundle/Supports/Calculator.supports'
import Testing from '@APP|Bundles/TestingBundle/Services/Testing.services'

export default class CalculatorKeyboardTesting extends Testing {
  public elements: ICalculatorKeyboardElements

  constructor() {
    super({
      mainClassName: 'div.CalculatorKeyboard',
      viewportHeight: 200,
      viewportWidth: 200,
    }),
      (this.elements = {
        button: {
          zero: this.generateDataAttribute(ECalculatorNumber.ZERO),
          one: this.generateDataAttribute(ECalculatorNumber.ONE),
          two: this.generateDataAttribute(ECalculatorNumber.TWO),
          three: this.generateDataAttribute(ECalculatorNumber.THREE),
          four: this.generateDataAttribute(ECalculatorNumber.FOUR),
          five: this.generateDataAttribute(ECalculatorNumber.FIVE),
          six: this.generateDataAttribute(ECalculatorNumber.SIX),
          seven: this.generateDataAttribute(ECalculatorNumber.SEVEN),
          eight: this.generateDataAttribute(ECalculatorNumber.EIGHT),
          nine: this.generateDataAttribute(ECalculatorNumber.NINE),
          add: this.generateDataAttribute(ECalculatorSign.ADD),
          divide: this.generateDataAttribute(ECalculatorSign.DIVIDE),
          dot: this.generateDataAttribute(ECalculatorSign.DOT),
          minus: this.generateDataAttribute(ECalculatorSign.MINUS),
          multiply: this.generateDataAttribute(ECalculatorSign.MULTIPLY),
          result: this.generateDataAttribute(ECalculatorSign.RESULT),
        },
      })
  }

  public testComponent(): void {
    this.setViewport()

    this.renderComponent()

    this.checkComponentElements()

    this.clickAllButtons()
  }

  public clickButton(
    button: string,
    value?: TCalculatorNumber | TCalculatorSign,
  ): void {
    if (value) {
      cy.get(button).should('have.text', value).click()
    } else {
      cy.get(button).click()
    }
  }

  private clickAllButtons(): void {
    this.clickButton(this.elements.button.zero, ECalculatorNumber.ZERO)

    this.clickButton(this.elements.button.one, ECalculatorNumber.ONE)

    this.clickButton(this.elements.button.two, ECalculatorNumber.TWO)

    this.clickButton(this.elements.button.three, ECalculatorNumber.THREE)

    this.clickButton(this.elements.button.four, ECalculatorNumber.FOUR)

    this.clickButton(this.elements.button.five, ECalculatorNumber.FIVE)

    this.clickButton(this.elements.button.six, ECalculatorNumber.SIX)

    this.clickButton(this.elements.button.seven, ECalculatorNumber.SEVEN)

    this.clickButton(this.elements.button.eight, ECalculatorNumber.EIGHT)

    this.clickButton(this.elements.button.nine, ECalculatorNumber.NINE)

    this.clickButton(this.elements.button.add, ECalculatorSign.ADD)

    this.clickButton(this.elements.button.divide, ECalculatorSign.DIVIDE)

    this.clickButton(this.elements.button.dot, ECalculatorSign.DOT)

    this.clickButton(this.elements.button.minus, ECalculatorSign.MINUS)

    this.clickButton(this.elements.button.multiply, ECalculatorSign.MULTIPLY)

    this.clickButton(this.elements.button.result, ECalculatorSign.RESULT)
  }

  private renderComponent(): void {
    cy.mount(CalculatorKeyboard, {
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

  private generateDataAttribute(
    sign: TCalculatorNumber | TCalculatorSign,
  ): string {
    return `[data-test="calculator-button-${sign}"]`
  }
}
