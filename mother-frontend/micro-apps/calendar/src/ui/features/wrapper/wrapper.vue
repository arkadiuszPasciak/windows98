<template>
  <Observer>
    <UIFrame class="CalendarWrapper" :title="translation.title">
      <MonthSwitcher />
      <YearSwitcher />
      <Days />
    </UIFrame>
  </Observer>
</template>

<script setup lang="ts">
  import { Observer } from 'mobx-vue-lite'
  import UIFrame from '@APP|Bundles/UIFrameBundle/Components/UIFrame.vue'
  import Days from '../days/days.vue'
  import YearSwitcher from '../year-switcher/year-switcher.vue'
  import MonthSwitcher from '../month-switcher/month-switcher.vue'
  import useWrapper from './use-wrapper.composable'

  const { translation } = useWrapper()
</script>

<style lang="scss" scoped src="./wrapper.style.scss" />
