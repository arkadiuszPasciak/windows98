<template>
  <div class="DateCalendar">
    <div class="week-days">
      <div
        v-for="item in shortcutDaysOfWeek"
        :key="`shortcut-days-of-week-${item}`"
        class="week"
      >
        {{ t(item) }}
      </div>
    </div>

    <div class="days">
      <button
        v-for="item in 30"
        :key="`days-of-months-${item}`"
        type="button"
        class="day"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { shortcutDaysOfWeek } from '@Bundles/DateBundle/Mocks/Date.mocks'

  const { t } = useI18n()
</script>

<i18n src="@Bundles/DateBundle/Locales/Date.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/DateCalendar.styles.scss';
</style>
