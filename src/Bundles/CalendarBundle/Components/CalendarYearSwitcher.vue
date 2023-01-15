<template>
  <UIInput
    v-if="calculatorStore?.year"
    id="year-switcher"
    class="CalendarYearSwitcher"
    type="number"
    :model-value="calculatorStore.year"
    :min="1950"
    :max="2050"
  />
</template>

<script setup lang="ts">
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'
  import { useCalendarStore } from '@Bundles/CalendarBundle/Stores/Calendar.stores'

  const calculatorStore = useCalendarStore()
</script>

<style lang="scss" scoped>
  @import '@Bundles/CalendarBundle/Styles/CalendarYearSwitcher.styles.scss';
</style>
