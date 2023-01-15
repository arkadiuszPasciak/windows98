<template>
  <div class="CalendarView">
    <div class="week-days">
      <div
        v-for="item in shortcutDaysOfWeek"
        :key="`shortcut-days-of-week-${item}`"
        class="week"
      >
        {{ t(item) }}
      </div>
    </div>

    <div v-if="calculatorStore?.calendar" class="days">
      <button
        v-for="(item, index) in calculatorStore.calendar"
        :key="`days-of-months-${index}`"
        type="button"
        class="day"
        :class="item.status === ECalendarStatusDay.ACTIVE ? 'is-active' : ''"
      >
        {{ item.value }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { shortcutDaysOfWeek } from '@Bundles/CalendarBundle/Mocks/Calendar.mocks'
  import { useCalendarStore } from '@Bundles/CalendarBundle/Stores/Calendar.stores'
  import { ECalendarStatusDay } from '@Bundles/CalendarBundle/Supports/Calendar.supports'

  const { t } = useI18n()

  const calculatorStore = useCalendarStore()

  onBeforeMount(() => {
    calculatorStore.generateCurrentCalendar(new Date())
  })
</script>

<i18n src="@Bundles/CalendarBundle/Locales/Calendar.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/CalendarBundle/Styles/CalendarView.styles.scss';
</style>
