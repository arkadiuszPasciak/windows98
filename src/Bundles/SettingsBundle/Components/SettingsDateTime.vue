<template>
  <div class="SettingsDateTime">
    <DateMonthSwitcher />
    <DateYearSwitcher />
    <DateCalendar />
  </div>
</template>

<script setup lang="ts">
  import DateMonthSwitcher from '@Bundles/DateBundle/Components/DateMonthSwitcher.vue'
  import DateYearSwitcher from '@Bundles/DateBundle/Components/DateYearSwitcher.vue'
  import DateCalendar from '@Bundles/DateBundle/Components/DateCalendar.vue'
</script>

<style lang="scss" scoped>
  @import '@Bundles/SettingsBundle/Styles/SettingsDateTime.styles.scss';
</style>
