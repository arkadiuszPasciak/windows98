import { expect, it, describe } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { useTimerStore } from "@APP|Bundles/TimerBundle/Stores/Timer.stores"
import {
	ETimerSwitcherMethod,
	ETimerSwitcherType,
} from "@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports"
import { ETimerPresetsRadioCheck } from "@APP|Bundles/TimerBundle/Supports/TimerPresets.supports"

setActivePinia(createPinia())
const TimerStore = useTimerStore()

describe("[TimerBundle]<Stores>(changeDisabledTime)", () => {
	it("is disabled presets & switcher", () => {
		TimerStore.changeDisabledTime(true)

		expect(TimerStore.disabled.presets).toBe(true)
		expect(TimerStore.disabled.switcher).toBe(true)
	})

	it("is enabled presets & switcher", () => {
		TimerStore.changeDisabledTime(false)

		expect(TimerStore.disabled.presets).toBe(false)
		expect(TimerStore.disabled.switcher).toBe(false)
	})
})

describe("[TimerBundle]<Stores>(changeTimeSwitcher)", () => {
	it("is increasing and decreasing hours", () => {
		TimerStore.switcher.hours = 0
		TimerStore.time.hours = 0

		TimerStore.changeTimeSwitcher(
			ETimerSwitcherMethod.INCREASE,
			ETimerSwitcherType.HOURS,
		)

		expect(TimerStore.switcher.hours).toBe(1)
		expect(TimerStore.time.hours).toBe(1)

		TimerStore.changeTimeSwitcher(
			ETimerSwitcherMethod.DECREASE,
			ETimerSwitcherType.HOURS,
		)

		expect(TimerStore.switcher.hours).toBe(0)
		expect(TimerStore.time.hours).toBe(0)
	})

	it("is increasing and decreasing minutes", () => {
		TimerStore.switcher.minutes = 0
		TimerStore.time.minutes = 0

		TimerStore.changeTimeSwitcher(
			ETimerSwitcherMethod.INCREASE,
			ETimerSwitcherType.MINUTES,
		)

		expect(TimerStore.switcher.minutes).toBe(1)
		expect(TimerStore.time.minutes).toBe(1)

		TimerStore.changeTimeSwitcher(
			ETimerSwitcherMethod.DECREASE,
			ETimerSwitcherType.MINUTES,
		)

		expect(TimerStore.switcher.minutes).toBe(0)
		expect(TimerStore.time.minutes).toBe(0)
	})

	it("is increasing and decreasing seconds", () => {
		TimerStore.switcher.seconds = 0
		TimerStore.time.seconds = 0

		TimerStore.changeTimeSwitcher(
			ETimerSwitcherMethod.INCREASE,
			ETimerSwitcherType.SECONDS,
		)

		expect(TimerStore.switcher.seconds).toBe(1)
		expect(TimerStore.time.seconds).toBe(1)

		TimerStore.changeTimeSwitcher(
			ETimerSwitcherMethod.DECREASE,
			ETimerSwitcherType.SECONDS,
		)

		expect(TimerStore.switcher.seconds).toBe(0)
		expect(TimerStore.time.seconds).toBe(0)
	})

	it("returns function when switcher is disabled", () => {
		TimerStore.disabled.switcher = true
		TimerStore.switcher.seconds = 0
		TimerStore.time.seconds = 0

		TimerStore.changeTimeSwitcher(
			ETimerSwitcherMethod.INCREASE,
			ETimerSwitcherType.SECONDS,
		)

		expect(TimerStore.switcher.seconds).toBe(0)
		expect(TimerStore.time.seconds).toBe(0)

		TimerStore.disabled.switcher = false
	})
})

describe("[TimerBundle]<Stores>(updateModalMessage)", () => {
	it("switches modal state", () => {
		TimerStore.updateModalMessage(true)
		expect(TimerStore.modal.status).toBe(true)

		TimerStore.updateModalMessage(false)
		expect(TimerStore.modal.status).toBe(false)
	})
})

describe("[TimerBundle]<Stores>(updatePresets|updateTimeByDefaultPresets)", () => {
	it("updates presets three minutes", () => {
		TimerStore.updatePresets(ETimerPresetsRadioCheck.THREE_MINUTES)

		expect(TimerStore.presets).toBe(ETimerPresetsRadioCheck.THREE_MINUTES)
		expect(TimerStore.time.hours).toBe(0)
		expect(TimerStore.time.minutes).toBe(3)
		expect(TimerStore.time.seconds).toBe(0)
	})

	it("updates presets five minutes", () => {
		TimerStore.updatePresets(ETimerPresetsRadioCheck.FIVE_MINUTES)

		expect(TimerStore.presets).toBe(ETimerPresetsRadioCheck.FIVE_MINUTES)
		expect(TimerStore.time.hours).toBe(0)
		expect(TimerStore.time.minutes).toBe(5)
		expect(TimerStore.time.seconds).toBe(0)
	})

	it("updates presets ten minutes", () => {
		TimerStore.updatePresets(ETimerPresetsRadioCheck.TEN_MINUTES)

		expect(TimerStore.presets).toBe(ETimerPresetsRadioCheck.TEN_MINUTES)
		expect(TimerStore.time.hours).toBe(0)
		expect(TimerStore.time.minutes).toBe(10)
		expect(TimerStore.time.seconds).toBe(0)
	})

	it("updates presets fifteen minutes", () => {
		TimerStore.updatePresets(ETimerPresetsRadioCheck.FIFTEEN_MINUTES)

		expect(TimerStore.presets).toBe(ETimerPresetsRadioCheck.FIFTEEN_MINUTES)
		expect(TimerStore.time.hours).toBe(0)
		expect(TimerStore.time.minutes).toBe(15)
		expect(TimerStore.time.seconds).toBe(0)
	})

	it("updates presets custom minutes", () => {
		TimerStore.updatePresets(ETimerPresetsRadioCheck.CUSTOM_MINUTES)

		expect(TimerStore.presets).toBe(ETimerPresetsRadioCheck.CUSTOM_MINUTES)
		expect(TimerStore.time.hours).toBe(0)
		expect(TimerStore.time.minutes).toBe(0)
		expect(TimerStore.time.seconds).toBe(0)
	})
})

describe("[TimerBundle]<Stores>(resetTime)", () => {
	it("resets switcher & time", () => {
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

describe("[TimerBundle]<Stores>(showSwitcherByCustomPreset)", () => {
	it("resets switcher & time", () => {
		TimerStore.showSwitcherByCustomPreset(
			ETimerPresetsRadioCheck.CUSTOM_MINUTES,
		)
		expect(TimerStore.disabled.switcher).toBe(false)

		TimerStore.showSwitcherByCustomPreset(ETimerPresetsRadioCheck.THREE_MINUTES)
		expect(TimerStore.disabled.switcher).toBe(true)
	})
})

describe("[TimerBundle]<Stores>(showTimeByCustomPreset)", () => {
	it("sets time in switcher", () => {
		TimerStore.time.hours = 10
		TimerStore.time.minutes = 10
		TimerStore.time.seconds = 10
		TimerStore.switcher.hours = 0
		TimerStore.switcher.minutes = 0
		TimerStore.switcher.seconds = 0

		TimerStore.showTimeByCustomPreset()

		expect(TimerStore.switcher.hours).toBe(0)
		expect(TimerStore.switcher.minutes).toBe(0)
		expect(TimerStore.switcher.seconds).toBe(0)
	})
})
