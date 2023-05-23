<template>
  <p class="TimerDisplay" data-test="timer-display">
    <span class="time">
      {{ timerStore.time.hours }}{{ showSecondZero(timerStore.time.hours) }}
    </span>
    <span class="colon">:</span>
    <span class="time">
      {{ timerStore.time.minutes }}{{ showSecondZero(timerStore.time.minutes) }}
    </span>
    <span class="colon">:</span>
    <span class="time">
      {{ timerStore.time.seconds }}{{ showSecondZero(timerStore.time.seconds) }}
    </span>
  </p>
</template>

<script setup lang="ts">
  import { useTimerStore } from '@APP|Bundles/TimerBundle/Stores/Timer.stores'
  import TimerDisplay from '@APP|Bundles/TimerBundle/Services/TimerDisplay.services'

  const { showSecondZero } = new TimerDisplay()

  const timerStore = useTimerStore()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerDisplay.styles.scss"
/>
