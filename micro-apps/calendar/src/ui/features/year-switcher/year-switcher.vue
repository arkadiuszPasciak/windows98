<template>
  <UIStepper
    class="CalendarYearSwitcher"
    :input="{ id: 'calendar-year-stepper' }"
    :field-modification="false"
    :model-value="year ?? 1900"
    @increase="increaseYear"
    @decrease="decreaseYear"
    @value="year"
  />
</template>

<script setup lang="ts">
  import UIStepper from '../../../../../../app/Bundles/UI/UIStepperBundle/Components/UIStepper.vue'
  import useYearSwitcher from './use-year-switcher.composable'

  const { increaseYear, decreaseYear, year } = useYearSwitcher()
</script>

<style lang="scss" scoped />
