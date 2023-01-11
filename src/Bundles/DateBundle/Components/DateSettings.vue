<template>
  <UIFrame class="DateSettings" :title="t('Date.title-date')">
    <DateMonthSwitcher />
    <DateYearSwitcher />
    <DateCalendar />
  </UIFrame>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import DateMonthSwitcher from '@Bundles/DateBundle/Components/DateMonthSwitcher.vue'
  import DateYearSwitcher from '@Bundles/DateBundle/Components/DateYearSwitcher.vue'
  import DateCalendar from '@Bundles/DateBundle/Components/DateCalendar.vue'
  import UIFrame from '@Bundles/UIBundle/Components/UIFrame.vue'

  const { t } = useI18n()
</script>

<i18n src="@Bundles/DateBundle/Locales/Date.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/DateSettings.styles.scss';
</style>
