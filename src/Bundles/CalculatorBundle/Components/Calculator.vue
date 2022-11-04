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
      <CalculatorDisplay class="display" :value="calculatorStore.value" />
      <UIButton class="color-blue" size="calculator" @click="addNumber('7')">
        7
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('8')">
        8
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('9')">
        9
      </UIButton>
      <UIButton class="color-red" size="calculator">/</UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('4')">
        4
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('5')">
        5
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('6')">
        6
      </UIButton>
      <UIButton class="color-red" size="calculator">*</UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('1')">
        1
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('2')">
        2
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('3')">
        3
      </UIButton>
      <UIButton class="color-red" size="calculator">-</UIButton>
      <UIButton class="color-blue" size="calculator" @click="addNumber('0')">
        0
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="addDot()">
        .
      </UIButton>
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

  const addDot = () => {
    calculatorStore.addDot()
  }

  const addNumber = (number: string) => {
    calculatorStore.addNumber(number)
  }

  const { t } = useI18n()
</script>

<i18n src="@Bundles/CalculatorBundle/Locales/Calculator.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/CalculatorBundle/Styles/Calculator.styles.scss';
</style>
