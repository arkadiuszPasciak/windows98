<template>
  <UIModal
    class="Timer"
    :title="t('TimerBundle.title')"
    :resize-window="false"
    width="380px"
    height="230px"
    :modal-state="programStore.modalTimer"
    @close-modal="closeModal"
  >
    <ma-timer></ma-timer>
  </UIModal>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import { useProgramStore } from "@APP|Bundles/ProgramBundle/Stores/Program.stores"

const { t } = useI18n()
const programStore = useProgramStore()

const closeModal = (): void => {
	programStore.updateTimerModal(false)
}
</script>
