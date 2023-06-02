import TimerDisplayTesting from '@APP|Bundles/TimerBundle/Services/TimerDisplayTesting.services'
import TimerPresetsTesting from '@APP|Bundles/TimerBundle/Services/TimerPresetsTesting.services'
// import TimerSwitcherTesting from '@APP|Bundles/TimerBundle/Services/TimerSwitcherTesting.services'
import { ETimerPresetsRadioCheck } from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'
// import { ETimerSwitcherType } from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

const TimerPresetsTestingService = new TimerPresetsTesting()
const TimerDisplayTestingService = new TimerDisplayTesting()
// const TimerSwitcherTestingService = {
//   hours: new TimerSwitcherTesting(ETimerSwitcherType.HOURS),
//   minutes: new TimerSwitcherTesting(ETimerSwitcherType.MINUTES),
//   seconds: new TimerSwitcherTesting(ETimerSwitcherType.SECONDS),
// }

export default class TimerTesting {
  public checkComponent(): void {
    this.checkMainClass()

    this.checkModalTitle()
  }

  public switchPresetsAndCheckTime(): void {
    TimerPresetsTestingService.clickRadioInput(
      2,
      ETimerPresetsRadioCheck.FIVE_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      hours: '00',
      minutes: '05',
      seconds: '00',
    })

    TimerPresetsTestingService.clickRadioInput(
      3,
      ETimerPresetsRadioCheck.TEN_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      hours: '00',
      minutes: '10',
      seconds: '00',
    })

    TimerPresetsTestingService.clickRadioInput(
      4,
      ETimerPresetsRadioCheck.FIFTEEN_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      hours: '00',
      minutes: '15',
      seconds: '00',
    })

    TimerPresetsTestingService.clickRadioInput(
      1,
      ETimerPresetsRadioCheck.THREE_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      hours: '00',
      minutes: '03',
      seconds: '00',
    })

    TimerPresetsTestingService.clickRadioInput(
      5,
      ETimerPresetsRadioCheck.CUSTOM_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      hours: '00',
      minutes: '00',
      seconds: '00',
    })
  }

  // public switchCustomTimeAndCheckTime(): void {
  //   // TimerSwitcherTestingService.hours.
  //   console.log('123')
  // }

  public checkMainClass(): void {
    cy.get('div.UIModal.Timer')
  }

  public checkModalTitle(): void {
    cy.get('[data-test="modal-header-title"]').should('have.text', 'Timer')
  }

  public checkButton(type: 'start' | 'reset'): void {
    cy.get(`[data-test="timer-button-${type}"]`).should('have.text', 'Timer')
  }
}
