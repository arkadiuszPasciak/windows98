<template>
  <UIStepper
    class="TimerSecondsSwitcher"
    :input="{ id: 'timer-seconds-stepper' }"
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

<style lang="scss" scoped />
