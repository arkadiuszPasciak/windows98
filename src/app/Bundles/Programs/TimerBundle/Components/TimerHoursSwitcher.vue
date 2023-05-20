<template>
  <UIStepper
    class="TimerHoursSwitcher"
    :input="{ id: 'timer-hours-stepper' }"
    :field-modification="false"
    :model-value="0"
    @increase="increase"
    @decrease="decrease"
    @value="0"
  />
</template>

<script setup lang="ts">
  import UIStepper from '@APP|Bundles/UIStepperBundle/Components/UIStepper.vue'

  const increase = (): void => {
    console.log('increase')
  }

  const decrease = (): void => {
    console.log('decrease')
  }
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerHoursSwitcher.styles.scss"
/>
