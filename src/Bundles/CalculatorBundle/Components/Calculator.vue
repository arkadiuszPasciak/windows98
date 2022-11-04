<template>
  <UIModal
    class="Calculator"
    :title="t('Calculator.title')"
    :resize-window="false"
    :width="195"
    :height="220"
    :modal-state="calculatorStore.modal"
    @close-modal="closeModal"
  >
    <div class="content">
      <CalculatorDisplay class="display" value="0" />
      <UIButton class="color-blue" size="calculator">7</UIButton>
      <UIButton class="color-blue" size="calculator">8</UIButton>
      <UIButton class="color-blue" size="calculator">9</UIButton>
      <UIButton class="color-red" size="calculator">/</UIButton>
      <UIButton class="color-blue" size="calculator">4</UIButton>
      <UIButton class="color-blue" size="calculator">5</UIButton>
      <UIButton class="color-blue" size="calculator">6</UIButton>
      <UIButton class="color-red" size="calculator">*</UIButton>
      <UIButton class="color-blue" size="calculator">1</UIButton>
      <UIButton class="color-blue" size="calculator">2</UIButton>
      <UIButton class="color-blue" size="calculator">3</UIButton>
      <UIButton class="color-red" size="calculator">-</UIButton>
      <UIButton class="color-blue" size="calculator">0</UIButton>
      <UIButton class="color-blue" size="calculator">.</UIButton>
      <UIButton class="color-blue" size="calculator">=</UIButton>
      <UIButton class="color-red" size="calculator">+</UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import CalculatorDisplay from '@Bundles/CalculatorBundle/Components/CalculatorDisplay.vue'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import { useCalculatorStore } from '@Bundles/CalculatorBundle/Stores/Calculator.stores'

  const calculatorStore = useCalculatorStore()

  const closeModal = (): void => {
    calculatorStore.updateModal(false)
  }

  const { t } = useI18n()
</script>

<style lang="scss" scoped>
  @import '@Bundles/CalculatorBundle/Styles/Calculator.styles.scss';
</style>
