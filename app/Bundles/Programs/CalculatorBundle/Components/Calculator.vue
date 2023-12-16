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
    <div class="content">
      <CalculatorDisplay />
      <CalculatorKeyboard />
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import CalculatorDisplay from '@APP|Bundles/CalculatorBundle/Components/CalculatorDisplay.vue'
  import CalculatorKeyboard from '@APP|Bundles/CalculatorBundle/Components/CalculatorKeyboard.vue'
  import UIModal from '@APP|Bundles/UIModalBundle/Components/UIModal.vue'
  import { useProgramStore } from '@APP|Bundles/ProgramBundle/Stores/Program.stores'

  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateCalculatorModal(false)
  }

  const { t } = useI18n()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/CalculatorBundle/Styles/Calculator.styles.scss"
/>
