<template>
  <UIInput
    v-if="calculatorStore?.year"
    id="year-switcher"
    class="DateYearSwitcher"
    type="number"
    :model-value="calculatorStore.year"
    :min="1950"
    :max="2050"
  />
</template>

<script setup lang="ts">
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'
  import { useCalendarStore } from '@Bundles/DateBundle/Stores/Calendar.stores'

  const calculatorStore = useCalendarStore()
</script>

<style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/DateYearSwitcher.styles.scss';
</style>
