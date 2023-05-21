<template>
  <UIFrame class="TimerPresets" :title="t('TimerBundle.presets.title')">
    <UIRadio
      v-for="(preset, id) in MTimerPresets"
      :key="`time-presets-${id}`"
      :name="preset.name"
      :checked="preset.checked"
      :model-value="store.presets"
      :disabled="store.disabled.presets"
      @update:model-value="store.updatePresets($event)"
    >
      {{ t(preset.text) }}
    </UIRadio>
  </UIFrame>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIFrame from '@APP|Bundles/UIFrameBundle/Components/UIFrame.vue'
  import UIRadio from '@APP|Bundles/UIRadioBundle/Components/UIRadio.vue'
  import { MTimerPresets } from '@APP|Bundles/TimerBundle/Mocks/TimerPresets.mocks'
  import { useTimerStore } from '@APP|Bundles/TimerBundle/Stores/Timer.stores'

  const { t } = useI18n()

  const store = useTimerStore()
</script>

<i18n src="@APP|Bundles/TimerBundle/Locales/Timer.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerPresets.styles.scss"
/>
