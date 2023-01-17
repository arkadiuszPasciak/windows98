<template>
  <div class="CalendarYearSwitcher">
    <UIText class="year">{{ calculatorStore.year }}</UIText>
    <UIButton class="button increase" size="small" @click="increase" />
    <UIButton class="button decrease" size="small" @click="decrease" />
  </div>
</template>

<script setup lang="ts">
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import { useCalendarStore } from '@Bundles/CalendarBundle/Stores/Calendar.stores'
  import { ECalendarYearChangeMethod } from '@Bundles/CalendarBundle/Supports/Calendar.supports'

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

<style lang="scss" scoped>
  @import '@Bundles/CalendarBundle/Styles/CalendarYearSwitcher.styles.scss';
</style>
