<template>
  <UIInput
    id="year-switcher"
    class="DateYearSwitcher"
    type="number"
    :model-value="year ?? '1950'"
    :min="1950"
    :max="2050"
    :disabled="true"
  />
</template>

<script setup lang="ts">
  import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'
  import { getFullYear } from '@Bundles/DateBundle/Services/Date.services'

  const date = new Date()
  const year = getFullYear(date)?.toString()
</script>

<style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/DateYearSwitcher.styles.scss';
</style>
