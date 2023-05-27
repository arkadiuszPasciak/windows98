import { expect, it, describe } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTimerStore } from '@APP|Bundles/TimerBundle/Stores/Timer.stores'
import { ETimerPresetsRadioCheck } from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'

setActivePinia(createPinia())
const TimerStore = useTimerStore()

describe('[TimerBundle]<Stores>(changeDisabledTime)', () => {
  it('is disabled presets & switcher', () => {
    TimerStore.changeDisabledTime(true)

    expect(TimerStore.disabled.presets).toBe(true)
    expect(TimerStore.disabled.switcher).toBe(true)
  })

  it('is enabled presets & switcher', () => {
    TimerStore.changeDisabledTime(false)

    expect(TimerStore.disabled.presets).toBe(false)
    expect(TimerStore.disabled.switcher).toBe(false)
  })
})

describe('[TimerBundle]<Stores>(updateModalMessage)', () => {
  it('switches modal state', () => {
    TimerStore.updateModalMessage(true)
    expect(TimerStore.modal.status).toBe(true)

    TimerStore.updateModalMessage(false)
    expect(TimerStore.modal.status).toBe(false)
  })
})

describe('[TimerBundle]<Stores>(resetTime)', () => {
  it('resets switcher & time', () => {
    TimerStore.switcher.hours = 1
    TimerStore.switcher.minutes = 2
    TimerStore.switcher.seconds = 3

    TimerStore.time.hours = 4
    TimerStore.time.minutes = 5
    TimerStore.time.seconds = 6

    TimerStore.resetTime()

    expect(TimerStore.switcher.hours).toBe(0)
    expect(TimerStore.switcher.minutes).toBe(0)
    expect(TimerStore.switcher.seconds).toBe(0)

    expect(TimerStore.time.hours).toBe(0)
    expect(TimerStore.time.minutes).toBe(0)
    expect(TimerStore.time.seconds).toBe(0)
  })
})

describe('[TimerBundle]<Stores>(showSwitcherByCustomPreset)', () => {
  it('resets switcher & time', () => {
    TimerStore.showSwitcherByCustomPreset(
      ETimerPresetsRadioCheck.CUSTOM_MINUTES,
    )
    expect(TimerStore.disabled.switcher).toBe(false)

    TimerStore.showSwitcherByCustomPreset(ETimerPresetsRadioCheck.THREE_MINUTES)
    expect(TimerStore.disabled.switcher).toBe(true)
  })
})
