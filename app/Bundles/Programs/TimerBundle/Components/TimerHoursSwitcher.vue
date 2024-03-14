<template>
  <UIStepper
    class="TimerHoursSwitcher"
    :input="{ id: 'timer-hours-stepper' }"
    :field-modification="false"
    :model-value="store.switcher.hours"
    :disabled="store.disabled.switcher"
    @increase="increase"
    @decrease="decrease"
    @value="store.switcher.hours"
  />
</template>

<script setup lang="ts">
import UIStepper from "@APP|Bundles/UIStepperBundle/Components/UIStepper.vue"
import { useTimerStore } from "@APP|Bundles/TimerBundle/Stores/Timer.stores"
import {
	ETimerSwitcherMethod,
	ETimerSwitcherType,
} from "@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports"

const store = useTimerStore()

const increase = (): void => {
	store.changeTimeSwitcher(
		ETimerSwitcherMethod.INCREASE,
		ETimerSwitcherType.HOURS,
	)
}

const decrease = (): void => {
	store.changeTimeSwitcher(
		ETimerSwitcherMethod.DECREASE,
		ETimerSwitcherType.HOURS,
	)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerHoursSwitcher.styles.scss"
/>
