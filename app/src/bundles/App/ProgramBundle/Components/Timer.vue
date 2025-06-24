<template>
  <UIModal
    class="Timer"
    :title="t('TimerBundle.title')"
    :resize-window="false"
    width="380px"
    height="230px"
    :modal-state="programs.timer"
    @close-modal="closeModal"
  >
    <mf-timer />
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramManager } from "@APP/src/configs/app/hooks"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const { runProgram, programs } = useProgramManager()

const closeModal = (): void => {
	runProgram("timer", false)
}
</script>
