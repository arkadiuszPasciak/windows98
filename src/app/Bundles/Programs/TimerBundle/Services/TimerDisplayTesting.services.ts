import { ITimerSwitcherType } from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

export default class TimerDisplayTesting {
  public checkComponent(): void {
    this.checkMainClass()

    this.checkTime({ hours: '00', minutes: '03', seconds: '00' })

    this.checkColons()
  }
  public checkMainClass(): void {
    cy.get('p.TimerDisplay')
  }
  public checkTime({ hours, minutes, seconds }: ITimerSwitcherType): void {
    cy.get('[data-test="timer-display-hours"]').should('have.text', hours)

    cy.get('[data-test="timer-display-minutes"]').should('have.text', minutes)

    cy.get('[data-test="timer-display-seconds"]').should('have.text', seconds)
  }
  public checkColons(): void {
    cy.get('[data-test="timer-display-hours"]').next().should('have.text', ':')

    cy.get('[data-test="timer-display-minutes"]')
      .next()
      .should('have.text', ':')
  }
}
