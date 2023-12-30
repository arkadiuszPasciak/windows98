<template>
  <UISelect
    id="date-months"
    class="CalendarMonthSwitcher"
    :model-value="month"
    :options="selectMonths"
    @update:model-value="changeCalendarByMonth($event)"
  />
</template>

<script setup lang="ts">
  import UISelect from '@windows98/app/Bundles/UI/UISelectBundle/Components/UISelect.vue'

  import useMonthSwitcher from './use-month-switcher.composable'

  const { changeCalendarByMonth, month, selectMonths } = useMonthSwitcher()
</script>

<style lang="scss" scoped src="./month-switcher.style.scss" />
