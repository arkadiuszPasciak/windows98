import { TTimerSwitcherType } from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

export default class TimerSwitcherTesting {
  private type: TTimerSwitcherType
  private id: string

  constructor(type: TTimerSwitcherType) {
    this.type = type
    this.id = `timer-${type}`
  }

  public checkMainClass(): void {
    const nameClass = this.type.charAt(0).toUpperCase() + this.type.slice(1)
    cy.get(`div.UIStepper.Timer${nameClass}Switcher`)
  }

  public increaseNumber(): void {
    cy.get(`[data-test="${this.id}-stepper-increase"]`).click()
  }

  public decreaseNumber(): void {
    cy.get(`[data-test="${this.id}-stepper-decrease"]`).click()
  }

  public checkInputValue(text: string): void {
    cy.get(`[data-test="${this.id}-stepper-input"]`).should('have.text', text)
  }

  public checkBelowZeroValue(): void {
    this.checkMainClass()

    this.increaseNumber()
    this.checkInputValue('1')

    this.increaseNumber()
    this.checkInputValue('2')

    this.decreaseNumber()
    this.checkInputValue('1')

    this.decreaseNumber()
    this.checkInputValue('0')

    this.decreaseNumber()
    this.checkInputValue('0')
  }

  public checkAboveFiftyNineValue(): void {
    this.checkMainClass()

    this.decreaseNumber()
    this.checkInputValue('58')

    this.decreaseNumber()
    this.checkInputValue('57')

    this.increaseNumber()
    this.checkInputValue('58')

    this.increaseNumber()
    this.checkInputValue('59')

    this.increaseNumber()
    this.checkInputValue('59')
  }
}
