<template>
  <UISelect
    id="timezones"
    class="TimezoneSwitcher"
    :model-value="currentTimezone ?? timezones[6].value"
    :options="timezones"
  />
</template>

<script setup lang="ts">
  import UISelect from '@Bundles/UIBundle/Components/UISelect.vue'
  import { timezones } from '@Bundles/TimezoneBundle/Mocks/Timezone.mocks'
  import { getTimezone } from '@Bundles/TimezoneBundle/Services/Timezone.services'

  const currentTimezone = getTimezone(new Date())
</script>

<style lang="scss" scoped>
  @import '@Bundles/TimezoneBundle/Styles/TimezoneSwitcher.styles.scss';
</style>
