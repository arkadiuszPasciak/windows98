<template>
  <UIStepper
    class="CalendarYearSwitcher"
    :input="{ id: 'calendar-year-stepper' }"
    :field-modification="false"
    :model-value="calculatorStore.year ?? 1900"
    @increase="increase"
    @decrease="decrease"
    @value="calculatorStore.year"
  />
</template>

<script setup lang="ts">
  import UIStepper from '@APP|Bundles/UIStepperBundle/Components/UIStepper.vue'
  import { useCalendarStore } from '@APP|Bundles/CalendarBundle/Stores/Calendar.stores'
  import { ECalendarYearChangeMethod } from '@APP|Bundles/CalendarBundle/Supports/Calendar.supports'

  const calculatorStore = useCalendarStore()

  const increase = (): void => {
    calculatorStore.changeNumberOfYear(ECalendarYearChangeMethod.INCREASE)
    calculatorStore.changeCalendarByYear()
  }

  const decrease = (): void => {
    calculatorStore.changeNumberOfYear(ECalendarYearChangeMethod.DECREASE)
    calculatorStore.changeCalendarByYear()
  }
</script>

<style lang="scss" scoped />
