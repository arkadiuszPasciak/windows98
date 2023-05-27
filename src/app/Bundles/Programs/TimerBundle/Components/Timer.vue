<template>
  <UIModal
    class="Timer"
    :title="t('TimerBundle.title')"
    :resize-window="false"
    width="330px"
    height="225px"
    :modal-state="programStore.modalTimer"
    @close-modal="closeModal"
  >
    <div class="content" :class="timerStore.modal.status ? 'is-disabled' : ''">
      <TimerModal />

      <TimerPresets />

      <TimerHoursSwitcher />

      <TimerMinutesSwitcher />

      <TimerSecondsSwitcher />

      <TimerDisplay />

      <UIButton
        class="button is-start"
        :disabled="
          timerStore.time.seconds === 0 &&
          timerStore.time.minutes === 0 &&
          timerStore.time.seconds === 0
        "
        @click="timerStore.startTime"
      >
        {{
          timerStore.status
            ? t('TimerBundle.button.stop')
            : t('TimerBundle.button.start')
        }}
      </UIButton>

      <UIButton
        class="button is-reset"
        :disabled="timerStore.status"
        @click="timerStore.resetTime"
      >
        {{ t('TimerBundle.button.reset') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIButton from '@APP|Bundles/UIButtonBundle/Components/UIButton.vue'
  import UIModal from '@APP|Bundles/UIModalBundle/Components/UIModal.vue'
  import TimerDisplay from '@APP|Bundles/TimerBundle/Components/TimerDisplay.vue'
  import TimerHoursSwitcher from '@APP|Bundles/TimerBundle/Components/TimerHoursSwitcher.vue'
  import TimerMinutesSwitcher from '@APP|Bundles/TimerBundle/Components/TimerMinutesSwitcher.vue'
  import TimerModal from '@APP|Bundles/TimerBundle/Components/TimerModal.vue'
  import TimerPresets from '@APP|Bundles/TimerBundle/Components/TimerPresets.vue'
  import TimerSecondsSwitcher from '@APP|Bundles/TimerBundle/Components/TimerSecondsSwitcher.vue'
  import { useProgramStore } from '@APP|Bundles/ProgramBundle/Stores/Program.stores'
  import { useTimerStore } from '@APP|Bundles/TimerBundle/Stores/Timer.stores'

  const { t } = useI18n()

  const programStore = useProgramStore()

  const timerStore = useTimerStore()

  const closeModal = (): void => {
    programStore.updateTimerModal(false)
  }
</script>

<i18n src="@APP|Bundles/TimerBundle/Locales/Timer.locales.json"></i18n>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/Timer.styles.scss"
/>
