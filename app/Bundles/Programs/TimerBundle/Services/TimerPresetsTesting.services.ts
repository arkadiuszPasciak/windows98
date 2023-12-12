import {
  ETimerPresetsRadioCheck,
  TTimerPresetsRadioCheck,
} from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'

export default class TimerPresetsTesting {
  public checkComponent(): void {
    this.checkMainClass()
    this.checkTitle()

    this.clickRadioInput(2, ETimerPresetsRadioCheck.FIVE_MINUTES)
    this.clickRadioInput(3, ETimerPresetsRadioCheck.TEN_MINUTES)
    this.clickRadioInput(4, ETimerPresetsRadioCheck.FIFTEEN_MINUTES)
    this.clickRadioInput(5, ETimerPresetsRadioCheck.CUSTOM_MINUTES)
    this.clickRadioInput(1, ETimerPresetsRadioCheck.THREE_MINUTES)
  }

  public checkMainClass(): void {
    cy.get('div.UIFrame.TimerPresets')
  }

  public checkTitle(): void {
    cy.get('[data-test="frame-title-presets"]').should('have.text', 'Presets')
  }

  public clickRadioInput(id: number, name: TTimerPresetsRadioCheck): void {
    let presetName: string

    if (name === ETimerPresetsRadioCheck.CUSTOM_MINUTES) {
      presetName = name.charAt(0).toUpperCase() + name.slice(1)
    } else {
      presetName = name
    }

    cy.get(`[data-test="timer-presets-${id}"]`).contains(presetName).click()
  }
}
