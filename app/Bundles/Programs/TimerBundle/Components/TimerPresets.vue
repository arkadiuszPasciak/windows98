<template>
  <UIFrame
    class="TimerPresets"
    :title="t('TimerBundle.presets.title')"
  >
    <UIRadio
      v-for="(preset, id) in MTimerPresets"
      :key="`time-presets-${id}`"
      :name="preset.name"
      :checked="preset.checked"
      :model-value="preset.modelValue"
      :disabled="store.disabled.presets"
      :data-test="`timer-presets-${id + 1}`"
      @update:model-value="store.updatePresets($event)"
    >
      {{ t(preset.text) }}
    </UIRadio>
  </UIFrame>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import UIFrame from "@APP|Bundles/UIFrameBundle/Components/UIFrame.vue"
import UIRadio from "@APP|Bundles/UIRadioBundle/Components/UIRadio.vue"
import { MTimerPresets } from "@APP|Bundles/TimerBundle/Mocks/TimerPresets.mocks"
import { useTimerStore } from "@APP|Bundles/TimerBundle/Stores/Timer.stores"

const { t } = useI18n()

const store = useTimerStore()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerPresets.styles.scss"
/>
