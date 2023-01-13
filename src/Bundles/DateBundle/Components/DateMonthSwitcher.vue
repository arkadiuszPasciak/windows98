<template>
  <UISelect
    id="date-months"
    class="DateMonthSwitcher"
    :model-value="calculatorStore.month ?? listOfMonths[0].value"
    :options="listOfMonths"
    @update:model-value="calculatorStore.changeCalendarByMonth($event)"
  />
</template>

<script setup lang="ts">
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { listOfMonths } from '@Bundles/DateBundle/Mocks/Date.mocks'
  import { useCalendarStore } from '@Bundles/DateBundle/Stores/Calendar.stores'

  const calculatorStore = useCalendarStore()
</script>

<i18n src="@Bundles/DateBundle/Locales/Date.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/DateMonthSwitcher.styles.scss';
</style>
