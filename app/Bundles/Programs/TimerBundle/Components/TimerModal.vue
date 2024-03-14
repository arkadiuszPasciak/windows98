<template>
  <UIModal
    class="TimerModal"
    :title="t('TimerBundle.title-modal')"
    :resize-window="false"
    :move-window="false"
    width="150px"
    height="100px"
    :modal-state="timerStore.modal.status"
    @close-modal="closeModal"
  >
    <div class="content">
      <UIText>{{ t('TimerBundle.description-modal') }}</UIText>

      <UIButton
        data-test="timer-modal-button"
        @click="closeModal"
      >
        {{ t('TimerBundle.close') }}
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import UIButton from "@APP|Bundles/UIButtonBundle/Components/UIButton.vue"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import UIText from "@APP|Bundles/UITextBundle/Components/UIText.vue"
import { useTimerStore } from "@APP|Bundles/TimerBundle/Stores/Timer.stores"

const timerStore = useTimerStore()

const closeModal = (): void => {
	timerStore.updateModalMessage(false)
}

const { t } = useI18n()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/TimerBundle/Styles/TimerModal.styles.scss"
/>
