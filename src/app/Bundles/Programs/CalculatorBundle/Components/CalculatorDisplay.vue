<template>
  <UIText class="CalculatorDisplay" data-test="calculator-display">
    {{ calculatorStore.value }}
  </UIText>
</template>

<script setup lang="ts">
  import UIText from '@APP|Bundles/UITextBundle/Components/UIText.vue'
  import { useCalculatorStore } from '@APP|Bundles/CalculatorBundle/Stores/Calculator.stores'

  const calculatorStore = useCalculatorStore()
</script>

<style
  lang="scss"
  scoped
  src="@APP|Bundles/CalculatorBundle/Styles/CalculatorDisplay.styles.scss"
/>
