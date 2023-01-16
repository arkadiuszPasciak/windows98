<!-- @update:model-value="" -->
<template>
  <UISelect
    id="timezones"
    class="TimezoneSwitcher"
    :model-value="timezones[0].value"
    :options="timezones"
  />
</template>

<script setup lang="ts">
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { timezones } from '@Bundles/TimezoneBundle/Mocks/Timezone.mocks'
</script>

<style lang="scss" scoped>
  @import '@Bundles/TimezoneBundle/Styles/TimezoneSwitcher.styles.scss';
</style>
