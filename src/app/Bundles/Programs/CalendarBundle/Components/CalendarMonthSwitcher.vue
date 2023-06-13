<template>
  <UISelect
    id="date-months"
    class="CalendarMonthSwitcher"
    :model-value="calculatorStore.month ?? MCalendarMonths[0].value"
    :options="MCalendarMonths"
    @update:model-value="calculatorStore.changeCalendarByMonth($event)"
  />
</template>

<script setup lang="ts">
  import UISelect from '@APP|Bundles/UISelectBundle/Components/UISelect.vue'
  import { MCalendarMonths } from '@APP|Bundles/CalendarBundle/Mocks/Calendar.mocks'
  import { useCalendarStore } from '@APP|Bundles/CalendarBundle/Stores/Calendar.stores'

  const calculatorStore = useCalendarStore()
</script>

<i18n src="@APP|Bundles/CalendarBundle/Locales/Calendar.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/CalendarBundle/Styles/CalendarMonthSwitcher.styles.scss"
/>
