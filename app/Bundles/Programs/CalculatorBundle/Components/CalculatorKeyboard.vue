<template>
  <div class="CalculatorKeyboard">
    <template
      v-for="button in MCalculatorButtons"
      :key="button.testAttribute"
    >
      <UIButton
        v-if="button.type === ECalculatorButton.NUMBER"
        :class="button.color"
        size="calculator"
        :data-test="button.testAttribute"
        @click="addNumber(button.content as TCalculatorNumber)"
      >
        {{ button.content }}
      </UIButton>

      <UIButton
        v-else-if="button.type === ECalculatorButton.SIGN"
        :class="button.color"
        size="calculator"
        :data-test="button.testAttribute"
        @click="addSign(button.content as TCalculatorSign)"
      >
        {{ button.content }}
      </UIButton>

      <UIButton
        v-else-if="button.type === ECalculatorButton.DOT"
        :class="button.color"
        size="calculator"
        :data-test="button.testAttribute"
        @click="addDot()"
      >
        {{ button.content }}
      </UIButton>

      <UIButton
        v-else-if="button.type === ECalculatorButton.RESULT"
        :class="button.color"
        size="calculator"
        :data-test="button.testAttribute"
        @click="summResult()"
      >
        {{ button.content }}
      </UIButton>
    </template>
  </div>
</template>

<script setup lang="ts">
import UIButton from "@APP|Bundles/UIButtonBundle/Components/UIButton.vue"
import { useCalculatorStore } from "@APP|Bundles/CalculatorBundle/Stores/Calculator.stores"
import {
	ECalculatorButton,
	TCalculatorNumber,
	TCalculatorSign,
} from "@APP|Bundles/CalculatorBundle/Supports/Calculator.supports"
import { MCalculatorButtons } from "@APP|Bundles/CalculatorBundle/Mocks/Calculator.mocks"

const calculatorStore = useCalculatorStore()

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
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/CalculatorBundle/Styles/CalculatorKeyboard.styles.scss"
/>
