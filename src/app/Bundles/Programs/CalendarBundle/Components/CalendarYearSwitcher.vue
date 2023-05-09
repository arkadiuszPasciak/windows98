<template>
  <div class="CalendarYearSwitcher">
    <UIText class="year" data-test="calendar-year-switcher-year">
      {{ calculatorStore.year }}
    </UIText>
    <UIButton
      class="button increase"
      size="small"
      data-test="calendar-year-switcher-increase"
      @click="increase"
    />
    <UIButton
      class="button decrease"
      size="small"
      data-test="calendar-year-switcher-decrease"
      @click="decrease"
    />
  </div>
</template>

<script setup lang="ts">
  import UIButton from '@APP|Bundles/UIButtonBundle/Components/UIButton.vue'
  import UIText from '@APP|Bundles/UITextBundle/Components/UIText.vue'
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

<style
  lang="scss"
  scoped
  src="@APP|Bundles/CalendarBundle/Styles/CalendarYearSwitcher.styles.scss"
/>
