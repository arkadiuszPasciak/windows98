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

    <div v-if="calculatorStore?.calendar" class="days">
      <button
        v-for="(item, index) in calculatorStore.calendar"
        :key="`days-of-months-${index}`"
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
  import { useCalendarStore } from '@Bundles/DateBundle/Stores/Calendar.stores'
  import { onBeforeMount } from 'vue'

  const { t } = useI18n()

  const calculatorStore = useCalendarStore()

  onBeforeMount(() => {
    calculatorStore.generateCurrentCalendar(new Date())
  })
</script>

<i18n src="@Bundles/DateBundle/Locales/Date.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/DateBundle/Styles/DateCalendar.styles.scss';
</style>
