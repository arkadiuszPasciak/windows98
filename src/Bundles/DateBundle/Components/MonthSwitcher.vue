<!-- TODO add update model value @update:model-value=""  -->
<template>
  <UISelect
    id="date-months"
    :model-value="listOfMonths[0].value"
    class="MonthSwitcher"
    :options="listOfMonths"
  />
</template>

<script setup lang="ts">
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { listOfMonths } from '@Bundles/DateBundle/Mocks/Date.mocks'
</script>

<i18n src="@Bundles/DateBundle/Locales/Date.locales.json"></i18n>

<!-- TODO set styles with design -->
<!-- <style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/DateSwitcher.styles.scss';
</style> -->
