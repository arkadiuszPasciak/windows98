<template>
  <div class="SettingsDateTime">
    <MonthSwitcher />
    <YearSwitcher />
    <DateCalendar />
  </div>
</template>

<script setup lang="ts">
  import MonthSwitcher from '@Bundles/DateBundle/Components/MonthSwitcher.vue'
  import YearSwitcher from '@Bundles/DateBundle/Components/YearSwitcher.vue'
  import DateCalendar from '@Bundles/DateBundle/Components/DateCalendar.vue'
</script>

<style lang="scss" scoped>
  @import '@Bundles/SettingsBundle/Styles/SettingsDateTime.styles.scss';
</style>
