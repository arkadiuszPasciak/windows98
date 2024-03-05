<template>
  <UIStepper
    class="TimerSecondsSwitcher"
    :input="{ id: 'timer-seconds-stepper' }"
    :field-modification="false"
    :model-value="store.switcher.seconds"
    :disabled="store.disabled.switcher"
    @increase="increase"
    @decrease="decrease"
    @value="store.switcher.seconds"
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
		ETimerSwitcherType.SECONDS,
	)
}

const decrease = (): void => {
	store.changeTimeSwitcher(
		ETimerSwitcherMethod.DECREASE,
		ETimerSwitcherType.SECONDS,
	)
}
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerSecondsSwitcher.styles.scss"
/>
