<template>
  <UISelect
    id="date-months"
    class="CalendarMonthSwitcher"
    :model-value="calculatorStore.month ?? MListOfMonths[0].value"
    :options="MListOfMonths"
    @update:model-value="calculatorStore.changeCalendarByMonth($event)"
  />
</template>

<script setup lang="ts">
  import UISelect from '@Bundles/UISelectBundle/Components/UISelect.vue'
  import { MListOfMonths } from '@Bundles/CalendarBundle/Mocks/Calendar.mocks'
  import { useCalendarStore } from '@Bundles/CalendarBundle/Stores/Calendar.stores'

  const calculatorStore = useCalendarStore()
</script>

<i18n src="@Bundles/CalendarBundle/Locales/Calendar.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/CalendarBundle/Styles/CalendarMonthSwitcher.styles.scss"
/>
