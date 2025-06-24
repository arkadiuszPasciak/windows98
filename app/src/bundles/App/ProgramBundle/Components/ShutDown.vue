<template>
  <UIModal
    class="ShutDown"
    :title="t('ShutDownBundle.title')"
    :resize-window="false"
    width="330px"
    height="180px"
    :modal-state="programs.shutDown"
    @close-modal="closeModal"
  >
    <div class="content">
      <mf-shutdown />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramManager } from "@APP/src/configs/app/hooks"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const { runProgram, programs } = useProgramManager()

const closeModal = (): void => {
	runProgram("shutDown", false)
}
</script>

