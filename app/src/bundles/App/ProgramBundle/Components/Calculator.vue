<template>
  <UIModal
    class="Calculator"
    :title="t('CalculatorBundle.title')"
    :resize-window="false"
    width="195px"
    height="220px"
    :modal-state="programs.calculator"
    @close-modal="closeModal"
  >
    <mf-calculator />
  </UIModal>
</template>

<script setup lang="ts">
import { useProgramManager } from "@APP/src/configs/app"
import UIModal from "@APP|Bundles/UIModalBundle/Components/UIModal.vue"
import { useI18n } from "vue-i18n"

const { runProgram, programs } = useProgramManager()

const closeModal = (): void => {
	runProgram("calculator", false)
}

const { t } = useI18n()
</script>
