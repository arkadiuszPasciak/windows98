<template>
  <UIModal
    class="Calculator"
    :title="t('Calculator.title')"
    :resize-window="false"
    :width="195"
    :height="235"
    :modal-state="calculatorStore.modal"
    @close-modal="closeModal"
  >
    <div class="content">
      <CalculatorDisplay value="0" />
      <UIButton>7</UIButton>
      <UIButton>8</UIButton>
      <UIButton>9</UIButton>
      <UIButton>/</UIButton>
      <UIButton>4</UIButton>
      <UIButton>5</UIButton>
      <UIButton>6</UIButton>
      <UIButton>*</UIButton>
      <UIButton>1</UIButton>
      <UIButton>2</UIButton>
      <UIButton>3</UIButton>
      <UIButton>-</UIButton>
      <UIButton>0</UIButton>
      <UIButton>+/-</UIButton>
      <UIButton>.</UIButton>
      <UIButton>+</UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import { useCalculatorStore } from '@Bundles/CalculatorBundle/Stores/Calculator.stores'

  const calculatorStore = useCalculatorStore()

  const closeModal = (): void => {
    calculatorStore.updateModal(false)
  }

  const { t } = useI18n()
</script>

<i18n src="@Bundles/ShutDownBundle/Locales/ShutDown.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/ShutDownBundle/Styles/ShutDown.styles.scss';
</style>
