<template>
  <div class="DateSettings">
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
  @import '@Bundles/DateBundle/Styles/DateSettings.styles.scss';
</style>
