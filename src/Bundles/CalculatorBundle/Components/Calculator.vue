<template>
  <UIModal
    class="Calculator"
    :title="t('Calculator.title')"
    :resize-window="false"
    :width="195"
    :height="220"
    :modal-state="programStore.modalCalculator"
    @close-modal="closeModal"
  >
    <div class="content">
      <CalculatorDisplay class="display" :value="calculatorStore.value" />
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.SEVEN)"
      >
        {{ ECalculatorNumber.SEVEN }}
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.EIGHT)"
      >
        {{ ECalculatorNumber.EIGHT }}
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.NINE)"
      >
        {{ ECalculatorNumber.NINE }}
      </UIButton>
      <UIButton
        class="color-red"
        size="calculator"
        @click="addSign(ECalculatorSign.DIVIDE)"
      >
        /
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.FOUR)"
      >
        {{ ECalculatorNumber.FOUR }}
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.FIVE)"
      >
        {{ ECalculatorNumber.FIVE }}
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.SIX)"
      >
        {{ ECalculatorNumber.SIX }}
      </UIButton>
      <UIButton
        class="color-red"
        size="calculator"
        @click="addSign(ECalculatorSign.MULTIPLY)"
      >
        *
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.ONE)"
      >
        {{ ECalculatorNumber.ONE }}
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.TWO)"
      >
        {{ ECalculatorNumber.TWO }}
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.THREE)"
      >
        {{ ECalculatorNumber.THREE }}
      </UIButton>
      <UIButton
        class="color-red"
        size="calculator"
        @click="addSign(ECalculatorSign.MINUS)"
      >
        -
      </UIButton>
      <UIButton
        class="color-blue"
        size="calculator"
        @click="addNumber(ECalculatorNumber.ZERO)"
      >
        {{ ECalculatorNumber.ZERO }}
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="addDot()">
        .
      </UIButton>
      <UIButton class="color-blue" size="calculator" @click="summResult()">
        =
      </UIButton>
      <UIButton
        class="color-red"
        size="calculator"
        @click="addSign(ECalculatorSign.ADD)"
      >
        +
      </UIButton>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import CalculatorDisplay from '@Bundles/CalculatorBundle/Components/CalculatorDisplay.vue'
  import UIButton from '@Bundles/UIBundle/Components/UIButton.vue'
  import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'
  import { useCalculatorStore } from '@Bundles/CalculatorBundle/Stores/Calculator.stores'
  import { useProgramStore } from '@Bundles/ProgramBundle/Stores/Program.stores'
  import {
    ECalculatorNumber,
    TCalculatorNumber,
    ECalculatorSign,
    TCalculatorSign,
  } from '@Bundles/CalculatorBundle/Supports/Calculator.supports'

  const calculatorStore = useCalculatorStore()
  const programStore = useProgramStore()

  const closeModal = (): void => {
    programStore.updateCalculatorModal(false)
  }

  const addDot = (): void => {
    calculatorStore.addDot()
  }

  const addNumber = (number: TCalculatorNumber): void => {
    calculatorStore.addNumber(number)
  }

  const addSign = (sign: TCalculatorSign): void => {
    calculatorStore.addSign(sign)
  }

  const summResult = (): void => {
    calculatorStore.summResult()
  }

  const { t } = useI18n()
</script>

<i18n src="@Bundles/CalculatorBundle/Locales/Calculator.locales.json"></i18n>

<style lang="scss" scoped>
  @import '@Bundles/CalculatorBundle/Styles/Calculator.styles.scss';
</style>
