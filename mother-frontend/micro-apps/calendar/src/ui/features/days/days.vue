<template>
  <div class="CalendarDays">
    <div class="week-days">
      <div
        v-for="(day, id) in shortcutDays"
        :key="`shortcut-days-of-week-${id}`"
        class="week"
      >
        {{ day }}
      </div>
    </div>

    <div v-if="calendar" class="days" data-test="calendar-view-days">
      <button
        v-for="(item, index) in calendar"
        :key="`days-of-months-${index}`"
        type="button"
        class="day"
        :class="[
          `is-${item.status}`,
          `${item.status === 'active' ? 'is-normal' : ''}`,
        ]"
      >
        {{ item.value }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import useDays from './use-days.composable'

  const { calendar, shortcutDays } = useDays()
</script>

<style lang="scss" scoped src="./days.styles.scss" />
