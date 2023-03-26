<template>
  <div class="CalendarView">
    <div class="week-days">
      <div
        v-for="item in MShortcutDaysOfWeek"
        :key="`shortcut-days-of-week-${item}`"
        class="week"
      >
        {{ t(item) }}
      </div>
    </div>

    <div
      v-if="calculatorStore?.calendar"
      class="days"
      data-test="calendar-view-days"
    >
      <button
        v-for="(item, index) in calculatorStore.calendar"
        :key="`days-of-months-${index}`"
        type="button"
        class="day"
        :class="[
          `is-${item.status}`,
          `${item.status === ECalendarStatusDay.ACTIVE ? 'is-normal' : ''}`,
        ]"
      >
        {{ item.value }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { MShortcutDaysOfWeek } from '@Bundles/CalendarBundle/Mocks/Calendar.mocks'
  import { useCalendarStore } from '@Bundles/CalendarBundle/Stores/Calendar.stores'
  import { ECalendarStatusDay } from '@Bundles/CalendarBundle/Supports/Calendar.supports'

  const { t } = useI18n()

  const calculatorStore = useCalendarStore()

  onBeforeMount(() => {
    calculatorStore.generateCurrentCalendar(new Date())
  })
</script>

<i18n src="@Bundles/CalendarBundle/Locales/Calendar.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@Bundles/CalendarBundle/Styles/CalendarView.styles.scss"
/>
