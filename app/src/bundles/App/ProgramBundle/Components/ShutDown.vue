<template>
  <UIModal
    class="ShutDown"
    :title="t('ShutDownBundle.title')"
    :resize-window="false"
    width="330px"
    height="180px"
    :modal-state="programStore.modalShutDown"
    @close-modal="closeModal"
  >
    <div class="content">
      <mf-shutdown />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramStore } from "@APP/src/bundles/App/ProgramBundle/Stores/Program.stores"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const programStore = useProgramStore()

const closeModal = (): void => {
	programStore.updateShutDownModal(false)
}
</script>

