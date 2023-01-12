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
        v-for="item in calendarDays"
        :key="`days-of-months-${item.value}`"
        type="button"
        class="day"
        :class="item.status === 'active' ? 'is-active' : ''"
      >
        {{ item.value }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { shortcutDaysOfWeek } from '@Bundles/DateBundle/Mocks/Date.mocks'
  import { currentCalendar } from '@Bundles/DateBundle/Services/Date.services'

  const { t } = useI18n()

  const calendarDays = currentCalendar.generateDays()
</script>

<i18n src="@Bundles/DateBundle/Locales/Date.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/DateCalendar.styles.scss';
</style>
