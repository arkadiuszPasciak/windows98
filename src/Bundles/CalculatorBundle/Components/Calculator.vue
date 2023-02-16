<template>
  <UIModal
    class="Calculator"
    :title="t('CalculatorBundle.title')"
    :resize-window="false"
    :width="195"
    :height="220"
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
  import CalculatorDisplay from '@Bundles/CalculatorBundle/Components/CalculatorDisplay.vue'
  import CalculatorKeyboard from '@Bundles/CalculatorBundle/Components/CalculatorKeyboard.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'

  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateCalculatorModal(false)
  }

  const { t } = useI18n()
</script>

<i18n src="@Bundles/CalculatorBundle/Locales/Calculator.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/CalculatorBundle/Styles/Calculator.styles.scss';
</style>
