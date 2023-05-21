<template>
  <UIStepper
    class="TimerMinutesSwitcher"
    :input="{ id: 'timer-minutes-stepper' }"
    :field-modification="false"
    :model-value="store.switcher.minutes"
    @increase="increase"
    @decrease="decrease"
    @value="store.switcher.minutes"
  />
</template>

<script setup lang="ts">
  import UIStepper from '@APP|Bundles/UIStepperBundle/Components/UIStepper.vue'
  import { useTimerStore } from '@APP|Bundles/TimerBundle/Stores/Timer.stores'
  import {
    ETimerSwitcherMethod,
    ETimerSwitcherType,
  } from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

  const store = useTimerStore()

  const increase = (): void => {
    store.changeTimeSwitcher(
      ETimerSwitcherMethod.INCREASE,
      ETimerSwitcherType.MINUTES,
    )
  }

  const decrease = (): void => {
    store.changeTimeSwitcher(
      ETimerSwitcherMethod.DECREASE,
      ETimerSwitcherType.MINUTES,
    )
  }
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerMinutesSwitcher.styles.scss"
/>
