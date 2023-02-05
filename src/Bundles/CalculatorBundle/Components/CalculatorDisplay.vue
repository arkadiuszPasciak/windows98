<template>
  <UIText class="CalculatorDisplay" data-test="calculator-display">
    {{ calculatorStore.value }}
  </UIText>
</template>

<script setup lang="ts">
  import UIText from '@Bundles/UIBundle/Components/UIText.vue'
  import { useCalculatorStore } from '@Bundles/CalculatorBundle/Stores/Calculator.stores'

  const calculatorStore = useCalculatorStore()
</script>

<style lang="scss" scoped>
  @import '@Bundles/CalculatorBundle/Styles/CalculatorDisplay.styles.scss';
</style>
