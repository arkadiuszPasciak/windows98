<template>
  <p class="TimerDisplay">
    <span
      class="time"
      data-test="timer-display-hours"
    >
      {{ showZeroBeforeSingleNumber(timerStore.time.hours)
      }}{{ timerStore.time.hours }}
    </span>
    <span class="colon">:</span>
    <span
      class="time"
      data-test="timer-display-minutes"
    >
      {{ showZeroBeforeSingleNumber(timerStore.time.minutes)
      }}{{ timerStore.time.minutes }}
    </span>
    <span class="colon">:</span>
    <span
      class="time"
      data-test="timer-display-seconds"
    >
      {{ showZeroBeforeSingleNumber(timerStore.time.seconds)
      }}{{ timerStore.time.seconds }}
    </span>
  </p>
</template>

<script setup lang="ts">
import { useTimerStore } from "@APP|Bundles/TimerBundle/Stores/Timer.stores"
import TimerDisplay from "@APP|Bundles/TimerBundle/Services/TimerDisplay.services"

const { showZeroBeforeSingleNumber } = new TimerDisplay()

const timerStore = useTimerStore()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerDisplay.styles.scss"
/>
