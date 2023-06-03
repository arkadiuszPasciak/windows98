import TimerDisplayTesting from '@APP|Bundles/TimerBundle/Services/TimerDisplayTesting.services'
import TimerPresetsTesting from '@APP|Bundles/TimerBundle/Services/TimerPresetsTesting.services'
import TimerSwitcherTesting from '@APP|Bundles/TimerBundle/Services/TimerSwitcherTesting.services'
import { ETimerPresetsRadioCheck } from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'
import {
  ETimerSwitcherType,
  ETimerSwitcherMethod,
} from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

const TimerPresetsTestingService = new TimerPresetsTesting()
const TimerDisplayTestingService = new TimerDisplayTesting()
const TimerSwitcherTestingService = {
  hours: new TimerSwitcherTesting(ETimerSwitcherType.HOURS),
  minutes: new TimerSwitcherTesting(ETimerSwitcherType.MINUTES),
  seconds: new TimerSwitcherTesting(ETimerSwitcherType.SECONDS),
}

export default class TimerTesting {
  public checkComponent(): void {
    this.checkMainClass()

    this.checkModalTitle()

    this.checkButtons()
  }

  public areSwichtersDisabled(): void {
    TimerSwitcherTestingService.hours.isDisabled()
    TimerSwitcherTestingService.minutes.isDisabled()
    TimerSwitcherTestingService.seconds.isDisabled()
  }

  public areSwitchersAvailable(): void {
    TimerSwitcherTestingService.hours.checkMainClass()
    TimerSwitcherTestingService.minutes.checkMainClass()
    TimerSwitcherTestingService.seconds.checkMainClass()
  }

  public switchPresetsAndCheckTime(): void {
    TimerPresetsTestingService.clickRadioInput(
      2,
      ETimerPresetsRadioCheck.FIVE_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      minutes: '05',
    })
    this.areSwichtersDisabled()

    TimerPresetsTestingService.clickRadioInput(
      3,
      ETimerPresetsRadioCheck.TEN_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      minutes: '10',
    })
    this.areSwichtersDisabled()

    TimerPresetsTestingService.clickRadioInput(
      4,
      ETimerPresetsRadioCheck.FIFTEEN_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      minutes: '15',
    })
    this.areSwichtersDisabled()

    TimerPresetsTestingService.clickRadioInput(
      1,
      ETimerPresetsRadioCheck.THREE_MINUTES,
    )
    TimerDisplayTestingService.checkTime({
      minutes: '03',
    })
    this.areSwichtersDisabled()

    TimerPresetsTestingService.clickRadioInput(
      5,
      ETimerPresetsRadioCheck.CUSTOM_MINUTES,
    )
    TimerDisplayTestingService.checkTime({})
    this.areSwitchersAvailable()
  }

  public switchCustomTimeAndCheckTime(): void {
    TimerSwitcherTestingService.hours.changeNumberAndCheckInput(
      ETimerSwitcherMethod.INCREASE,
      '1',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
    })

    TimerSwitcherTestingService.hours.changeNumberAndCheckInput(
      ETimerSwitcherMethod.INCREASE,
      '2',
    )
    TimerDisplayTestingService.checkTime({
      hours: '02',
    })

    TimerSwitcherTestingService.hours.changeNumberAndCheckInput(
      ETimerSwitcherMethod.DECREASE,
      '1',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
    })
  }

  public increaseAndDecreaseHoursBySwitcher(): void {
    TimerSwitcherTestingService.hours.changeNumberAndCheckInput(
      ETimerSwitcherMethod.INCREASE,
      '1',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
    })

    TimerSwitcherTestingService.hours.changeNumberAndCheckInput(
      ETimerSwitcherMethod.INCREASE,
      '2',
    )
    TimerDisplayTestingService.checkTime({
      hours: '02',
    })

    TimerSwitcherTestingService.hours.changeNumberAndCheckInput(
      ETimerSwitcherMethod.DECREASE,
      '1',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
    })
  }

  public increaseAndDecreaseMinutesBySwitcher(): void {
    TimerSwitcherTestingService.minutes.changeNumberAndCheckInput(
      ETimerSwitcherMethod.INCREASE,
      '1',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
      minutes: '01',
    })

    TimerSwitcherTestingService.minutes.changeNumberAndCheckInput(
      ETimerSwitcherMethod.INCREASE,
      '2',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
      minutes: '02',
    })

    TimerSwitcherTestingService.minutes.changeNumberAndCheckInput(
      ETimerSwitcherMethod.DECREASE,
      '1',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
      minutes: '01',
    })
  }

  public increaseAndDecreaseSecondsBySwitcher(): void {
    TimerSwitcherTestingService.seconds.changeNumberAndCheckInput(
      ETimerSwitcherMethod.INCREASE,
      '1',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
      minutes: '01',
      seconds: '01',
    })

    TimerSwitcherTestingService.seconds.changeNumberAndCheckInput(
      ETimerSwitcherMethod.INCREASE,
      '2',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
      minutes: '01',
      seconds: '02',
    })

    TimerSwitcherTestingService.seconds.changeNumberAndCheckInput(
      ETimerSwitcherMethod.DECREASE,
      '1',
    )
    TimerDisplayTestingService.checkTime({
      hours: '01',
      minutes: '01',
      seconds: '01',
    })
  }

  public checkMainClass(): void {
    cy.get('div.UIModal.Timer')
  }

  public checkModalTitle(): void {
    cy.get('[data-test="modal-header-title"]').should('have.text', 'Timer')
  }

  public checkButtons(): void {
    cy.get(`[data-test="timer-button-start"]`).should('have.text', 'Start')

    cy.get(`[data-test="timer-button-reset"]`).should('have.text', 'Reset')
  }

  public resetTimeAndCheckTimes(): void {
    cy.get(`[data-test="timer-button-reset"]`).click()

    TimerDisplayTestingService.checkTime({
      hours: '00',
      minutes: '00',
      seconds: '00',
    })

    TimerSwitcherTestingService.hours.checkInputValue('0')
    TimerSwitcherTestingService.minutes.checkInputValue('0')
    TimerSwitcherTestingService.seconds.checkInputValue('0')

    cy.get(`[data-test="timer-button-start"]`).should('have.attr', 'disabled')
  }
}
