<template>
  <UIModal
    class="Calculator"
    :title="t('CalculatorBundle.title')"
    :resize-window="false"
    width="195px"
    height="220px"
    :modal-state="programStore.modalCalculator"
    @close-modal="closeModal"
  >
    <ma-calculator />
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramStore } from "@APP/src/bundles/App/ProgramBundle/Stores/Program.stores"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import { useI18n } from "vue-i18n"

const programStore = useProgramStore()

const closeModal = (): void => {
	programStore.updateCalculatorModal(false)
}

const { t } = useI18n()
</script>
