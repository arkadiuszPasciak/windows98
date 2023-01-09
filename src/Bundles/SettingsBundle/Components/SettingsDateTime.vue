<template>
  <div class="SettingsDateTime">
    <MonthSwitcher />
    <YearSwitcher />
  </div>
</template>

<script setup lang="ts">
  import MonthSwitcher from '@Bundles/DateBundle/Components/MonthSwitcher.vue'
  import YearSwitcher from '@Bundles/DateBundle/Components/YearSwitcher.vue'
</script>

<style lang="scss" scoped>
  @import '@Bundles/SettingsBundle/Styles/SettingsDateTime.styles.scss';
</style>
